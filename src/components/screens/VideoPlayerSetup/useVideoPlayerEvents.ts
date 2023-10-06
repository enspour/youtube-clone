import { useEffect } from "react";

import { useLocalStorage } from "@/hooks/client";

import { useVideoPlayerStore } from "@/stores";

import { LOCAL_STORAGE_PLAYER_VOLUME } from "@/constants";

export const useVideoPlayerEvents = () => {
    const videoElement = useVideoPlayerStore((state) => state.videoElement);

    const [, setVolume] = useLocalStorage(LOCAL_STORAGE_PLAYER_VOLUME, 0.2);

    useEffect(() => {
        if (!videoElement) return;

        const updateVolume = () => {
            setVolume(videoElement.volume);
        };

        videoElement.addEventListener("volumechange", updateVolume);

        return () => {
            videoElement.removeEventListener("volumechange", updateVolume);
        };
    }, [videoElement]);
};
