import { create } from "zustand";

import { videosApi } from "@/api";

import { LoadingStatus, Video, isSuccessResponse } from "@/interfaces";

interface State {
    status: LoadingStatus;
    videos: Video[];
    start: number;
    offset: number;
}

interface Action {
    fetch: () => Promise<void>;
}

export const useHomePageVideosStore = create<State & Action>((set, get) => ({
    status: "done",
    videos: [],
    start: 0,
    offset: 20,

    fetch: async () => {
        const { status, videos, start, offset } = get();

        if (status === "pending") return;

        set(() => ({ status: "pending" }));

        const response = await videosApi.fetchSuggestions(start, offset);

        if (isSuccessResponse(response)) {
            const { data } = response;

            set(() => ({
                status: "done",
                videos: [...videos, ...data],
                start: start + offset,
            }));
        }
    },
}));
