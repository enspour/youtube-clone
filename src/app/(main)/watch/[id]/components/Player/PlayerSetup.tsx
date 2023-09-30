"use client";

import { FC, ReactNode, useEffect } from "react";

import { useVideoPlayerStore } from "@/stores";

import { Video } from "@/interfaces";

interface PlayerSetupProps {
    children: ReactNode;
    video: Video;
}

const PlayerSetup: FC<PlayerSetupProps> = ({ video, children }) => {
    const setVideo = useVideoPlayerStore((state) => state.setVideo);

    useEffect(() => {
        setVideo(video);
    }, [video]);

    return children;
};

export default PlayerSetup;
