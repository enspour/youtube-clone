"use client";

import { FC, memo } from "react";

import { useVideoElementCreator } from "./useVideoElementCreator";
import { useVideoPlayerMaximizer } from "./useVideoPlayerMaximizer";

const VideoPlayerSetup: FC = () => {
    useVideoElementCreator();
    useVideoPlayerMaximizer();

    return null;
};

export default memo(VideoPlayerSetup);
