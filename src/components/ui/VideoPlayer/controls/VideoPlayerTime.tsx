"use client";

import { FC } from "react";

import { useVideoPlayerStore } from "@/stores";

import { formatVideoTime } from "@/utils";

import styles from "../VideoPlayer.module.scss";

const VideoPlayerTime: FC = () => {
    const [time, duration] = [
        useVideoPlayerStore((state) => state.time),
        useVideoPlayerStore((state) => state.duration),
    ];

    return (
        <div className={styles.footer__time}>
            <span>{formatVideoTime(time)}</span>
            <span> / </span>
            <span>{formatVideoTime(duration)}</span>
        </div>
    );
};

export default VideoPlayerTime;
