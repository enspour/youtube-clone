import { fetchVideo, fetchVideos } from "@/server-actions/videos";

import { VideosApi } from "@/interfaces";

export class ServerActionsVideosApi implements VideosApi {
    async fetchOne(id: string) {
        return await fetchVideo(id);
    }

    async fetchSuggestions(start: number, offset: number) {
        return await fetchVideos(start, offset);
    }

    async fetchSuggestionsById(start: number, offset: number, id: string) {
        return await fetchVideos(start, offset);
    }
}
