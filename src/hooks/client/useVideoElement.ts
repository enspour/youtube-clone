import { useEffect } from "react";

import { useVideoPlayerStore } from "@/stores";

export const useVideoElement = (elementId: string) => {
    const videoElement = useVideoPlayerStore((state) => state.videoElement);

    useEffect(() => {
        if (!videoElement) return;

        const element = document.querySelector(`#${elementId}`);

        if (!element) return;

        element.appendChild(videoElement);
    }, [videoElement]);
};
