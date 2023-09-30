"use client";

import { FC, memo } from "react";

import { PictureInPicture } from "@/components/ui/PictureInPicture";
import { VideoPlayerMinimized } from "@/components/ui/VideoPlayerMinimized";

import { useVideoPlayerStore } from "@/stores";

const VideoPlayerPictureInPicture: FC = () => {
    const isMinimized = useVideoPlayerStore((state) => state.isMinimized);

    return (
        <PictureInPicture isOpen={isMinimized}>
            <VideoPlayerMinimized id="video-player-minimized" />
        </PictureInPicture>
    );
};

export default memo(VideoPlayerPictureInPicture);
