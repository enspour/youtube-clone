import { FC, memo } from "react";

import { VideoCardSkeleton } from "../../VideoCard";

import styles from "./VerticalVideoList.module.scss";

export interface VerticalVideoListSkeletonProps {
    type: "vertical";
    skeleton: number;
}

const VerticalVideoListSkeleton: FC<VerticalVideoListSkeletonProps> = ({
    skeleton,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.videos}>
            {skeletons.map((skeleton) => (
                <VideoCardSkeleton key={skeleton} direction="horizontal" />
            ))}
        </div>
    );
};

export default memo(VerticalVideoListSkeleton);
