import videos from "../../data/videos.json";

import { Video } from "@/interfaces";

let delay = 2000;

export async function fetchVideos(
    start: number,
    offset: number
): Promise<Video[]> {
    return new Promise((resolve) => {
        const result = videos.slice(start, start + offset);
        setTimeout(resolve, delay, result);
    });
}

export async function fetchSuggestedVideos(
    id: string,
    start: number,
    offset: number
): Promise<Video[]> {
    return new Promise((resolve) => {
        const result = videos.slice(start, start + offset);
        setTimeout(resolve, delay, result);
    });
}

export async function fetchVideo(id: string): Promise<Video> {
    return new Promise((resolve) => {
        const result = videos.find((video) => video.id === id)!;
        setTimeout(resolve, delay, result);
    });
}
