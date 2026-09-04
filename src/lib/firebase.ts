import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  getDocFromServer,
  collection,
} from "firebase/firestore";
import firebaseConfig from "../../firebase-applet-config.json";
export { firebaseConfig };

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// CRITICAL: Initialize Firestore with custom firestoreDatabaseId as required
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Operation Types for error handling conforming to Firebase skill
export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error("Firestore Error: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Validate connection to Firestore on initial boot
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, "test", "connection"));
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("the client is offline")
    ) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

// Google Sign-In helper (signInWithPopup works seamlessly in iframe)
export async function signInWithGoogle(): Promise<User> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
}

// Sign-Out helper
export async function signOutUser(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign-out error:", error);
    throw error;
  }
}

// Listen to auth state changes
export function subscribeToAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// Sync user stats to/from Firestore
export interface FirebaseUserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  xp: number;
  level: number;
  streakDays: number;
  title: string;
  completedQuests: string[];
  claimedDailyQuests?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export async function loadOrCreateUserProfile(
  user: User,
  defaultStats: {
    xp: number;
    level: number;
    streakDays: number;
    title: string;
    completedQuests: string[];
  }
): Promise<FirebaseUserProfile> {
  const userRef = doc(db, "users", user.uid);
  const path = `users/${user.uid}`;

  try {
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data() as FirebaseUserProfile;
    } else {
      // Create new profile
      const newProfile: FirebaseUserProfile = {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "Học viên Hóa học",
        photoURL:
          user.photoURL ||
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        xp: defaultStats.xp || 150,
        level: defaultStats.level || 2,
        streakDays: defaultStats.streakDays || 5,
        title: defaultStats.title || "Tập Sự Phòng Lab",
        completedQuests: defaultStats.completedQuests || ["q1"],
        claimedDailyQuests: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await setDoc(userRef, newProfile);
      return newProfile;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    throw error;
  }
}

export async function saveUserProfile(
  uid: string,
  updates: Partial<FirebaseUserProfile>
): Promise<void> {
  const userRef = doc(db, "users", uid);
  const path = `users/${uid}`;

  try {
    await updateDoc(userRef, {
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}
