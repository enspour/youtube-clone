import { FC, memo } from "react";

import { VideoCard, VideoCardSkeleton } from "../VideoCard";

import { Video } from "@/interfaces";

import styles from "./VideoGallery.module.scss";

interface VideoGalleryProps {
    videos: Video[];
    count: number;
}

const VideoGallery: FC<VideoGalleryProps> = ({ videos, count }) => {
    const indexes = [...new Array(count)].map((_, index) => index);

    return (
        <div className={styles.container}>
            <div className={styles.videos}>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}

                {indexes.map((index) => (
                    <VideoCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
};

export default memo(VideoGallery);
