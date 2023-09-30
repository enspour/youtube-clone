import { User, getDefaultUser } from "./user.interface";

export type VideoOwner = Pick<User, "id" | "name" | "followings">;

export interface Video {
    id: string;
    name: string;
    preview: string;
    url: string;
    duration: number;
    views: number;
    likes: number;
    owner: User;
    createdAt: number;
}

export const getDefaultVideo = (): Video => ({
    id: "",
    name: "",
    preview: "",
    url: "",
    duration: 0,
    likes: 0,
    views: 0,
    owner: getDefaultUser(),
    createdAt: 0,
});
