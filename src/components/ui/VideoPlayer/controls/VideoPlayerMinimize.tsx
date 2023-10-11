"use client";

import { useRouter } from "next/navigation";
import { FC, MouseEvent } from "react";

import { Icon } from "../../Icon";

import { useVideoPlayerStore } from "@/stores";

import MinimizeIcon from "@/assets/icons/player/minimize.svg";

const VideoPlayerMinimize: FC = () => {
    const router = useRouter();

    const minimize = useVideoPlayerStore((state) => state.minimize);

    const handleMinimize = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        minimize();
        router.push("/");
    };

    return <Icon svg={MinimizeIcon} onClick={handleMinimize} />;
};

export default VideoPlayerMinimize;
