import { FC } from "react";

import { Video } from "@/interfaces";

import styles from "./VideoCard.module.scss";

interface VideoCardPreviewProps {
    video: Video;
}

const VideoCardPreview: FC<VideoCardPreviewProps> = ({ video }) => {
    return (
        <div className={styles.preview}>
            <img src={video.preview} />
        </div>
    );
};

export default VideoCardPreview;
