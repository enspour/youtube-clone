import { FC, memo } from "react";

import { VideoCardSkeleton } from "../../VideoCard";

import styles from "./VerticalVideoList.module.scss";

export interface VerticalVideoListSkeletonProps {
    type: "vertical";
    count: number;
}

const VerticalVideoListSkeleton: FC<VerticalVideoListSkeletonProps> = ({
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

export default memo(VerticalVideoListSkeleton);
