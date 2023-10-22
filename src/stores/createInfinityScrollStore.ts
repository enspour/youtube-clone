import { create } from "zustand";

import { ApiResponse, LoadingStatus, isSuccessResponse } from "@/interfaces";

interface State<T> {
    status: LoadingStatus;
    items: T[];
    start: number;
    offset: number;
}

interface Action<Args extends any[]> {
    fetch: (...args: Args) => Promise<void>;
}

type Request<Args extends any[], Return> = (
    start: number,
    offset: number,
    ...args: Args
) => Promise<ApiResponse<Return[]>>;

export const createInfinityScrollStore = <Args extends any[], Return>(
    request: Request<Args, Return>,
    offset: number = 20
) => {
    return create<State<Return> & Action<Args>>((set, get) => ({
        status: "done",
        items: [],
        start: 0,
        offset,

        fetch: async (...args: Args) => {
            const { status, items, start, offset } = get();

            if (status === "pending") return;

            set(() => ({ status: "pending" }));

            const response = await request(start, offset, ...args);

            if (!isSuccessResponse(response)) {
                return set(() => ({ status: "error" }));
            }

            const { data } = response;

            set(() => ({
                status: "done",
                items: [...items, ...data],
                start: start + offset,
            }));
        },
    }));
};
