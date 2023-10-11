export interface User {
    id: number;
    name: string;
    avatar: string;
    followings: number;
    createdAt: number;
}

export const getDefaultUser = (): User => ({
    id: -1,
    name: "",
    avatar: "",
    followings: 0,
    createdAt: 0,
});
