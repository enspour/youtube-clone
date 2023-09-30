import { User } from "./user.interface";

export type CommentOwner = Pick<User, "id" | "name">;

export interface Comment {
    id: number;
    text: string;
    likes: number;
    owner: CommentOwner;
    createdAt: number;
}
