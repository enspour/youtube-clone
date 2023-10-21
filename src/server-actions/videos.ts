import videos from "../../data/generated/videos.json";

import { ApiResponse, Video } from "@/interfaces";

let delay = 2000;

export async function fetchVideos(
    start: number,
    offset: number
): Promise<ApiResponse<Video[]>> {
    return new Promise((resolve) => {
        const data = videos.slice(start, start + offset);

        const response = {
            statusCode: 200,
            data,
        };

        setTimeout(resolve, delay, response);
    });
}

export async function fetchVideo(
    id: string
): Promise<ApiResponse<Video | null>> {
    return new Promise((resolve) => {
        const data = videos.find((video) => video.id === id) || null;

        const response = {
            statusCode: 200,
            data,
        };

        setTimeout(resolve, delay, response);
    });
}
