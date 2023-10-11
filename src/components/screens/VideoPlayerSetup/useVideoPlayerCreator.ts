import { useEffect } from "react";

import { useVideoPlayerVolume } from "@/hooks/client";

import { useVideoPlayerStore } from "@/stores";

import styles from "./VideoPlayerSetup.module.scss";

export const useVideoPlayerCreator = () => {
    const video = useVideoPlayerStore((state) => state.video);

    const [volume] = useVideoPlayerVolume();

    const setVideoElement = useVideoPlayerStore(
        (state) => state.setVideoElement
    );

    useEffect(() => {
        const element = document.createElement("video");

        element.classList.add(styles.video);

        element.src = video.url;
        element.volume = volume;

        setVideoElement(element);
    }, []);
};
