import { videos } from "@/data/videos";

import { Video } from "@/interfaces";

let delay = 2000;

export async function getVideos(
    start: number,
    offset: number
): Promise<Video[]> {
    return new Promise((resolve) => {
        const result = videos.slice(start, start + offset);
        setTimeout(resolve, delay, result);
    });
}

export async function getSuggestedVideos(
    id: string,
    start: number,
    offset: number
): Promise<Video[]> {
    return new Promise((resolve) => {
        const result = videos.slice(start, start + offset);
        setTimeout(resolve, delay, result);
    });
}

export async function getVideo(id: string): Promise<Video> {
    return new Promise((resolve) => {
        const result = videos.find((video) => video.id === id)!;
        setTimeout(resolve, delay, result);
    });
}
