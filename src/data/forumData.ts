import { ForumPost } from "../types";
import { FORUM_POSTS_PART1 } from "./forumDataPart1";
import { FORUM_POSTS_PART2 } from "./forumDataPart2";

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  ...FORUM_POSTS_PART1,
  ...FORUM_POSTS_PART2,
];
