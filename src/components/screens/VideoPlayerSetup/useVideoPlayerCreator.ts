import { useEffect } from "react";

import { useLocalStorage } from "@/hooks/client";

import { useVideoPlayerStore } from "@/stores";

import { LOCAL_STORAGE_PLAYER_VOLUME } from "@/constants";

import styles from "./VideoPlayerSetup.module.scss";

export const useVideoPlayerCreator = () => {
    const setVideoElement = useVideoPlayerStore(
        (state) => state.setVideoElement
    );

    const video = useVideoPlayerStore((state) => state.video);

    const [volume] = useLocalStorage<number>(LOCAL_STORAGE_PLAYER_VOLUME, 0.2);

    useEffect(() => {
        const element = document.createElement("video");

        element.classList.add(styles.video);

        element.src = video.url;
        element.volume = volume;

        setVideoElement(element);
    }, []);
};
