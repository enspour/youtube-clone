export interface User {
    id: number;
    name: string;
    nickname: string;
    avatar: string;
    subscriptions: number;
    createdAt: number;
}

export const getDefaultUser = (): User => ({
    id: -1,
    name: "",
    nickname: "",
    avatar: "",
    subscriptions: 0,
    createdAt: 0,
});
