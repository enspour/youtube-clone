"use client";

import { FC, memo, useEffect } from "react";

import { VideoPlayer } from "@/components/ui/VideoPlayer";

import { useVideoPlayerStore } from "@/stores";

import { Video } from "@/interfaces";

import styles from "./Player.module.scss";

interface PlayerProps {
    video: Video;
}

const Player: FC<PlayerProps> = ({ video }) => {
    const setVideo = useVideoPlayerStore((state) => state.setVideo);

    useEffect(() => {
        setVideo(video);
    }, [video]);

    return (
        <div className={styles.player}>
            <VideoPlayer id="video-player" />
        </div>
    );
};

export default memo(Player);
