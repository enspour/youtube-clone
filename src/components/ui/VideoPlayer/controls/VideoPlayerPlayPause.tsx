"use client";

import { FC } from "react";

import { Icon } from "../../Icon";

import { useVideoPlayerStore } from "@/stores";

import PauseIcon from "@/assets/icons/player/pause.svg";
import PlayIcon from "@/assets/icons/player/play.svg";

const VideoPlayerPlayPause: FC = () => {
    const [isPlaying, play, pause] = [
        useVideoPlayerStore((state) => state.isPlaying),
        useVideoPlayerStore((state) => state.play),
        useVideoPlayerStore((state) => state.pause),
    ];

    return (
        <>
            {isPlaying ? (
                <Icon svg={PauseIcon} onClick={pause} />
            ) : (
                <Icon svg={PlayIcon} onClick={play} />
            )}
        </>
    );
};

export default VideoPlayerPlayPause;
