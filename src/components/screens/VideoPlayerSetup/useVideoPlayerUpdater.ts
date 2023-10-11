import { useEffect } from "react";

import { useVideoPlayerVolume } from "@/hooks/client";

import { useVideoPlayerStore } from "@/stores";

export const useVideoPlayerUpdater = () => {
    const videoElement = useVideoPlayerStore((state) => state.videoElement);

    const video = useVideoPlayerStore((state) => state.video);

    const [volume] = useVideoPlayerVolume();

    useEffect(() => {
        if (!videoElement) return;
        videoElement.src = video.url;
    }, [videoElement, video]);

    useEffect(() => {
        if (!videoElement) return;
        videoElement.volume = volume;
    }, [videoElement, volume]);
};
