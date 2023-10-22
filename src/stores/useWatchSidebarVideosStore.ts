import { createInfinityScrollStore } from "./createInfinityScrollStore";

import { videosApi } from "@/api";

export const useWatchSidebarVideosStore = createInfinityScrollStore(
    videosApi.fetchSuggestionsById,
    10
);
