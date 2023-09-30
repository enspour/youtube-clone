import { FC } from "react";

import { UserAvatar } from "../UserAvatar";
import { VideoCardDirection } from "./VideoCard";
import VideoCardInfoUser from "./VideoCardInfoUser";

import { formatVideoCreatedAt, formatVideoViews } from "@/utils";

import { Video } from "@/interfaces";

import styles from "./VideoCard.module.scss";

interface VideoCardInfoProps {
    video: Video;
    direction: VideoCardDirection;
}

const VideoCardInfo: FC<VideoCardInfoProps> = ({ video, direction }) => {
    return (
        <div className={styles.info}>
            {direction === "vertical" && (
                <UserAvatar user={video.owner} diameter="3.6rem" />
            )}

            <div>
                <div className={styles.info__name}>{video.name}</div>

                <VideoCardInfoUser video={video} />

                <div className={styles.info__stats}>
                    <span>{formatVideoViews(video.views)}</span>
                    <span> | </span>
                    <span>{formatVideoCreatedAt(video.createdAt)}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoCardInfo;
