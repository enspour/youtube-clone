import { FC, memo } from "react";

import { VideoCardSkeleton } from "../VideoCard";

import styles from "./VideoGallery.module.scss";

interface VideoGallerySkeletonProps {
    count: number;
}

const VideoGallerySkeleton: FC<VideoGallerySkeletonProps> = ({ count }) => {
    const indexes = [...new Array(count)].map((_, index) => index);

    return (
        <div className={styles.container}>
            <div className={styles.videos}>
                {indexes.map((index) => (
                    <VideoCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
};

export default memo(VideoGallerySkeleton);
