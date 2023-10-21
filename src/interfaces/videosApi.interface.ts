import { ApiResponse, Video } from ".";

export interface VideosApi {
    fetchOne(id: string): Promise<ApiResponse<Video | null>>;

    fetchSuggestions(
        start: number,
        offset: number
    ): Promise<ApiResponse<Video[]>>;

    fetchSuggestionsById(
        id: string,
        start: number,
        offset: number
    ): Promise<ApiResponse<Video[]>>;
}
