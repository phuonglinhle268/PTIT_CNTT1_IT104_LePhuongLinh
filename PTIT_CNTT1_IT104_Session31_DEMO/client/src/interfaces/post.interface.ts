import type { PostStatus } from "../enums/post.enum";

export interface CreatePost {
  title?: string;
  imageUrl?: string;
  status: PostStatus;
  content?: string;
  createdAt?: string;
}