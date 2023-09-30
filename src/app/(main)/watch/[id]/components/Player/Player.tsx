"use client";

import { FC, memo } from "react";

import { VideoPlayer } from "@/components/ui/VideoPlayer";
import PlayerSetup from "./PlayerSetup";

import { Video } from "@/interfaces";

import styles from "./Player.module.scss";

interface PlayerProps {
    video: Video;
}

const Player: FC<PlayerProps> = ({ video }) => {
    return (
        <div className={styles.player}>
            <PlayerSetup video={video}>
                <VideoPlayer id="video-player" />
            </PlayerSetup>
        </div>
    );
};

export default memo(Player);
