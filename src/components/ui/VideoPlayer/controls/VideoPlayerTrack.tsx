"use client";

import { FC } from "react";

import { Input } from "../../Input";

import { useVideoPlayerStore } from "@/stores";

const VideoPlayerTrack: FC = () => {
    const [time, setTime] = [
        useVideoPlayerStore((state) => state.time),
        useVideoPlayerStore((state) => state.setTime),
    ];

    const duration = useVideoPlayerStore((state) => state.duration);

    return (
        <Input
            type="track"
            value={time}
            setValue={setTime}
            min={0}
            max={duration || 1}
            step={0.01}
        />
    );
};

export default VideoPlayerTrack;
