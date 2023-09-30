"use client";

import { FC, memo } from "react";

import { useVideoElement } from "@/hooks/client";

import styles from "./VideoPlayerMinimized.module.scss";

interface VideoPlayerMinimizedProps {
    id: string;
}

const VideoPlayerMinimized: FC<VideoPlayerMinimizedProps> = ({ id }) => {
    useVideoElement(id);

    return <div id={id} className={styles.player}></div>;
};

export default memo(VideoPlayerMinimized);
