import { useEffect } from "react";

import { useVideoPlayerStore } from "@/stores";

export const useVideoPlayerUpdater = () => {
    const videoElement = useVideoPlayerStore((state) => state.videoElement);
    const video = useVideoPlayerStore((state) => state.video);

    useEffect(() => {
        if (!videoElement) return;

        videoElement.src = video.url;
    }, [video]);
};
