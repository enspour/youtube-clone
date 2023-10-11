import { useEffect } from "react";

import { useVideoPlayerVolume } from "@/hooks/client";

import { useVideoPlayerStore } from "@/stores";

export const useVideoPlayerEvents = () => {
    const videoElement = useVideoPlayerStore((state) => state.videoElement);

    const [
        setVolume,
        setManuallyTime,
        setDuration,
        setIsPlaying,
        setIsFullscreen,
    ] = [
        useVideoPlayerVolume()[1],
        useVideoPlayerStore((state) => state.setManuallyTime),
        useVideoPlayerStore((state) => state.setDuration),
        useVideoPlayerStore((state) => state.setIsPlaying),
        useVideoPlayerStore((state) => state.setIsFullscreen),
    ];

    const togglePlayPause = useVideoPlayerStore(
        (state) => state.togglePlayPause
    );

    useEffect(() => {
        if (!videoElement) return;

        const updateVolume = () => setVolume(videoElement.volume);
        const updateTime = () => setManuallyTime(videoElement.currentTime);
        const updateDuration = () => setDuration(videoElement.duration);

        const playing = () => setIsPlaying(true);
        const pausing = () => setIsPlaying(false);

        videoElement.addEventListener("volumechange", updateVolume);
        videoElement.addEventListener("timeupdate", updateTime);
        videoElement.addEventListener("durationchange", updateDuration);

        videoElement.addEventListener("play", playing);
        videoElement.addEventListener("pause", pausing);
        videoElement.addEventListener("loadedmetadata", pausing);

        videoElement.addEventListener("click", togglePlayPause);

        return () => {
            videoElement.removeEventListener("volumechange", updateVolume);
            videoElement.removeEventListener("timeupdate", updateTime);
            videoElement.removeEventListener("durationchange", updateDuration);

            videoElement.removeEventListener("play", playing);
            videoElement.removeEventListener("pause", pausing);
            videoElement.removeEventListener("loadedmetadata", pausing);

            videoElement.removeEventListener("click", togglePlayPause);
        };
    }, [videoElement]);

    useEffect(() => {
        const updateIsFullscreen = () =>
            setIsFullscreen(!!document.fullscreenElement);

        document.addEventListener("fullscreenchange", updateIsFullscreen);

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                updateIsFullscreen
            );
        };
    }, []);
};
