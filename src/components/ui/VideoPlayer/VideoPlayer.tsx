"use client";

import { FC, memo } from "react";

import VideoPlayerHeader from "./VideoPlayerHeader";

import { useVideoElement } from "@/hooks/client";

import styles from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
    id: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ id }) => {
    useVideoElement(id);

    return (
        <div id={id} className={styles.player}>
            <VideoPlayerHeader />
        </div>
    );
};

export default memo(VideoPlayer);
