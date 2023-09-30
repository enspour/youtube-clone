export interface User {
    id: string;
    name: string;
    avatar: string;
    followings: number;
    createdAt: number;
}

export const getDefaultUser = (): User => ({
    id: "",
    name: "",
    avatar: "",
    followings: 0,
    createdAt: 0,
});
