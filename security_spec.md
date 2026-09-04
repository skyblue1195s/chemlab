# Security Specification & Threat Model

## 1. Data Invariants
- **Identity Integrity**: `/users/{userId}` can only be read and written by the authenticated user matching `userId == request.auth.uid`.
- **Email Verification**: Write operations require verified authentication credentials (`request.auth != null`).
- **Subcollection Isolation**: Sub-collection `/users/{userId}/notes/{noteId}` belongs exclusively to `{userId}`. `note.userId` must equal `request.auth.uid`.
- **Length & Type Guards**: String lengths for `displayName`, `title`, `content` are strictly bounded to prevent resource exhaustion or Denial-of-Wallet attacks.
- **Catch-All Default Deny**: All unspecified paths outside the permitted trees are completely locked down (`allow read, write: if false;`).

## 2. The "Dirty Dozen" Payloads (Must be blocked with PERMISSION_DENIED)
1. **Unauthenticated User Profile Read**: An unauthenticated user attempts to read `/users/{userId}`.
2. **Impersonated Profile Write**: User `hacker123` attempts to write `/users/victim456`.
3. **Ghost / Unbounded Payload**: A user attempts to write a 1MB payload or malicious fields into `/users/{userId}`.
4. **UID Spoofing**: A user sends `{ uid: 'victim456' }` in `request.resource.data` to their own document path.
5. **Orphaned Note Creation**: User `user123` attempts to write to `/users/otherUser/notes/note1`.
6. **Cross-User Note Read**: User `user123` attempts to query another student's notes at `/users/otherUser/notes`.
7. **Junk Character Document ID**: Injecting a 2KB string containing control characters as `{userId}`.
8. **Malicious Negative XP Hack**: Sending `{ xp: -999999 }` or non-number XP.
9. **Blanket Collection Traversal**: Querying all `/users` without scoping by user ownership.
10. **Tampering with Note Author ID**: Updating a note with a forged `userId`.
11. **Excessive Note Title Length**: Creating a note with title length > 150 characters.
12. **Excessive Note Content Size**: Creating a note with content length > 5000 characters.

## 3. Rules Implementation
Rules are implemented in `firestore.rules` enforcing ABAC Zero-Trust security.
