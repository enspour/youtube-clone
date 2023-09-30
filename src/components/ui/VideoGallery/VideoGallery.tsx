import { FC, memo } from "react";

import { VideoCard } from "../VideoCard";

import { Video } from "@/interfaces";

import styles from "./VideoGallery.module.scss";

interface VideoGalleryProps {
    videos: Video[];
}

const VideoGallery: FC<VideoGalleryProps> = ({ videos }) => {
    return (
        <div className={styles.container}>
            <div className={styles.videos}>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default memo(VideoGallery);
