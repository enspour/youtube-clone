import { ApiResponse, Video } from "..";

export interface VideosApi {
    fetchOne(id: string): Promise<ApiResponse<Video>>;

    fetchSuggestions(
        start: number,
        offset: number
    ): Promise<ApiResponse<Video[]>>;

    fetchSuggestionsById(
        start: number,
        offset: number,
        id: string
    ): Promise<ApiResponse<Video[]>>;
}
