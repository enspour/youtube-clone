import { useEffect } from "react";

import { useVideoPlayerStore } from "@/stores";

import styles from "./VideoPlayerSetup.module.scss";

export const useVideoElementCreator = () => {
    const [videoElement, setVideoElement] = [
        useVideoPlayerStore((state) => state.videoElement),
        useVideoPlayerStore((state) => state.setVideoElement),
    ];

    const video = useVideoPlayerStore((state) => state.video);

    useEffect(() => {
        const element = document.createElement("video");

        element.classList.add(styles.video);
        element.controls = true;

        setVideoElement(element);
    }, []);

    useEffect(() => {
        if (!videoElement) return;
        videoElement.src = video.url;
    }, [video]);
};
