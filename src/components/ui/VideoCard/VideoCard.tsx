import Link from "next/link";
import { CSSProperties, FC, memo } from "react";

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
    return (
        <Link
            href={`/watch/${video.id}`}
            className={styles.video}
            style={getStyle(direction, palette)}
        >
            <VideoCardPreview video={video} />
            <VideoCardInfo video={video} direction={direction} />
        </Link>
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
