import { fetchVideo, fetchVideos } from "@/server-actions/videos";

export class VideosApi {
    static async fetchOne(id: string) {
        return await fetchVideo(id);
    }

    static async fetchSuggestions(start: number, offset: number) {
        return await fetchVideos(start, offset);
    }

    static async fetchSuggestionsById(
        id: string,
        start: number,
        offset: number
    ) {
        return await fetchVideos(start, offset);
    }
}
