import { createInfinityScrollStore } from "./createInfinityScrollStore";

import { videosApi } from "@/api";

export const useHomeVideosStore = createInfinityScrollStore(
    videosApi.fetchSuggestions
);
