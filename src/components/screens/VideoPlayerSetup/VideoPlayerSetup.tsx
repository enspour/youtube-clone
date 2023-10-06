"use client";

import { FC, memo } from "react";

import { useVideoPlayerCreator } from "./useVideoPlayerCreator";
import { useVideoPlayerEvents } from "./useVideoPlayerEvents";
import { useVideoPlayerMaximizer } from "./useVideoPlayerMaximizer";
import { useVideoPlayerUpdater } from "./useVideoPlayerUpdater";

const VideoPlayerSetup: FC = () => {
    useVideoPlayerCreator();
    useVideoPlayerUpdater();
    useVideoPlayerEvents();
    useVideoPlayerMaximizer();

    return null;
};

export default memo(VideoPlayerSetup);
