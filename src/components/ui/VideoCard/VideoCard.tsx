"use client";

import { useRouter } from "next/navigation";
import { CSSProperties, FC, MouseEvent, memo } from "react";

import VideoCardInfo from "./VideoCardInfo";
import VideoCardPreview from "./VideoCardPreview";

import { ThemePalette, Video } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./VideoCard.module.scss";

export type VideoCardDirection = "horizontal" | "vertical";

interface VideoCardProps {
    video: Video;
    direction?: VideoCardDirection;
    palette?: ThemePalette;
}

const VideoCard: FC<VideoCardProps> = ({
    video,
    direction = "vertical",
    palette = "primary",
}) => {
    const router = useRouter();

    const open = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        router.push(`/watch/${video.id}`);
    };

    return (
        <div
            className={styles.video}
            style={getStyle(direction, palette)}
            onClick={open}
        >
            <VideoCardPreview video={video} />
            <VideoCardInfo video={video} direction={direction} />
        </div>
    );
};

const getStyle = (
    direction: VideoCardDirection,
    palette: ThemePalette
): CSSProperties => ({
    flexDirection: direction === "horizontal" ? "row" : "column",
    ...getThemeColors(["bg", "color", "color-extra"], palette),
});

export default memo(VideoCard);
