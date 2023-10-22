import { FC, memo } from "react";

import { VideoCardSkeleton } from "../VideoCard";

import styles from "./VideoGallery.module.scss";

interface VideoGallerySkeletonProps {
    skeleton: number;
}

const VideoGallerySkeleton: FC<VideoGallerySkeletonProps> = ({ skeleton }) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.container}>
            <div className={styles.videos}>
                {skeletons.map((skeleton) => (
                    <VideoCardSkeleton key={skeleton} />
                ))}
            </div>
        </div>
    );
};

export default memo(VideoGallerySkeleton);
