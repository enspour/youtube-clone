"use client";

import { FC, RefObject } from "react";

import { Icon } from "../../Icon";

import { useVideoPlayerStore } from "@/stores";

import ExitFullscreenIcon from "@/assets/icons/player/exit-fullscreen.svg";
import FullscreenIcon from "@/assets/icons/player/fullscreen.svg";

interface VideoPlayerFullscreenProps {
    playerRef: RefObject<HTMLDivElement>;
}

const VideoPlayerFullscreen: FC<VideoPlayerFullscreenProps> = ({
    playerRef,
}) => {
    const isFullscreen = useVideoPlayerStore((state) => state.isFullscreen);

    const fullscreen = () => {
        const player = playerRef.current;
        if (!player) return;

        player.requestFullscreen();
    };

    const exitFullscreen = () => {
        if (document.fullscreenElement === null) return;
        document.exitFullscreen();
    };

    return (
        <>
            {isFullscreen ? (
                <Icon svg={ExitFullscreenIcon} onClick={exitFullscreen} />
            ) : (
                <Icon svg={FullscreenIcon} onClick={fullscreen} />
            )}
        </>
    );
};

export default VideoPlayerFullscreen;
