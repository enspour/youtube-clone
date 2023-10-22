import { FC, memo } from "react";

import { VideoCardSkeleton } from "../../VideoCard";

import styles from "./HorizontalVideoList.module.scss";

export interface HorizontalVideoListSkeletonProps {
    type: "horizontal";
    skeleton: number;
}

const HorizontalVideoListSkeleton: FC<HorizontalVideoListSkeletonProps> = ({
    skeleton,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.videos}>
            {skeletons.map((skeleton) => (
                <VideoCardSkeleton key={skeleton} />
            ))}
        </div>
    );
};

export default memo(HorizontalVideoListSkeleton);
