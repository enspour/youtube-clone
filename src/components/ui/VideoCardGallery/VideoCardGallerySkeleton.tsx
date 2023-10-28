import { FC, memo } from "react";

import { VideoCardSkeleton } from "../VideoCard";

import styles from "./VideoCardGallery.module.scss";

interface VideoCardGallerySkeletonProps {
    skeleton: number;
}

const VideoCardGallerySkeleton: FC<VideoCardGallerySkeletonProps> = ({
    skeleton,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.gallery}>
            <div className={styles.gallery__videos}>
                {skeletons.map((skeleton) => (
                    <VideoCardSkeleton key={skeleton} />
                ))}
            </div>
        </div>
    );
};

export default memo(VideoCardGallerySkeleton);
