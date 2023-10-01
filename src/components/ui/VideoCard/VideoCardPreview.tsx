import Image from "next/image";
import { FC } from "react";

import { Video } from "@/interfaces";

import styles from "./VideoCard.module.scss";

interface VideoCardPreviewProps {
    video: Video;
}

const VideoCardPreview: FC<VideoCardPreviewProps> = ({ video }) => {
    return (
        <div className={styles.preview}>
            <Image src={video.preview} alt="preview" width="400" height="225" />
        </div>
    );
};

export default VideoCardPreview;
