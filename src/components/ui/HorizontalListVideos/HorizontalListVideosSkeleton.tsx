import { FC, memo } from "react";

import { VideoCardSkeleton } from "../VideoCard";
import styles from "./HorizontalListVideos.module.scss";

interface HorizontalListVideosSkeletonProps {
    count: number;
}

const HorizontalListVideosSkeleton: FC<HorizontalListVideosSkeletonProps> = ({
    count,
}) => {
    const indexes = [...new Array(count)].map((_, index) => index);

    return (
        <div className={styles.videos}>
            {indexes.map((index) => (
                <VideoCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default memo(HorizontalListVideosSkeleton);
