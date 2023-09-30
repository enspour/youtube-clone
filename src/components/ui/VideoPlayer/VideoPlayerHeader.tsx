"use client";

import { useRouter } from "next/navigation";
import { FC, MouseEvent } from "react";

import { useVideoPlayerStore } from "@/stores";

import styles from "./VideoPlayer.module.scss";

const VideoPlayerHeader: FC = () => {
    const router = useRouter();

    const minimize = useVideoPlayerStore((state) => state.minimize);

    const open = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        minimize();

        router.push("/");
    };

    return (
        <div className={styles.header}>
            <button onClick={open}>open</button>
        </div>
    );
};

export default VideoPlayerHeader;
