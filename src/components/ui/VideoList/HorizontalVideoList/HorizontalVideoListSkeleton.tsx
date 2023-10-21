import { FC, memo } from "react";

import { VideoCardSkeleton } from "../../VideoCard";

import styles from "./HorizontalVideoList.module.scss";

export interface HorizontalVideoListSkeletonProps {
    type: "horizontal";
    count: number;
}

const HorizontalVideoListSkeleton: FC<HorizontalVideoListSkeletonProps> = ({
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

export default memo(HorizontalVideoListSkeleton);
