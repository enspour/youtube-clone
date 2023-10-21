import { fetchVideo, fetchVideos } from "@/server-actions/videos";

import { VideosApi } from "@/interfaces";

export class VideosServerActionsApi implements VideosApi {
    async fetchOne(id: string) {
        return await fetchVideo(id);
    }

    async fetchSuggestions(start: number, offset: number) {
        return await fetchVideos(start, offset);
    }

    async fetchSuggestionsById(id: string, start: number, offset: number) {
        return await fetchVideos(start, offset);
    }
}
