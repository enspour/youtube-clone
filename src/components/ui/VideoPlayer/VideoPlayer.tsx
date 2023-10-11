"use client";

import { FC, memo, useRef } from "react";

import VideoPlayerFooter from "./VideoPlayerFooter";
import VideoPlayerHeader from "./VideoPlayerHeader";

import { useVideoElement } from "@/hooks/client";

import styles from "./VideoPlayer.module.scss";

interface VideoPlayerProps {
    id: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ id }) => {
    const playerRef = useRef(null);

    useVideoElement(id);

    return (
        <div id={id} ref={playerRef} className={styles.player}>
            <VideoPlayerHeader playerRef={playerRef} />
            <VideoPlayerFooter playerRef={playerRef} />
        </div>
    );
};

export default memo(VideoPlayer);
