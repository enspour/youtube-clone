import { FC, memo } from "react";

import { VideoCardSkeleton } from "../VideoCard";

import styles from "./VerticalListVideos.module.scss";

interface VerticalListVideosSkeletonProps {
    count: number;
}

const VerticalListVideosSkeleton: FC<VerticalListVideosSkeletonProps> = ({
    count,
}) => {
    const indexes = [...new Array(count)].map((_, index) => index);

    return (
        <div className={styles.videos}>
            {indexes.map((index) => (
                <VideoCardSkeleton key={index} direction="horizontal" />
            ))}
        </div>
    );
};

export default memo(VerticalListVideosSkeleton);
