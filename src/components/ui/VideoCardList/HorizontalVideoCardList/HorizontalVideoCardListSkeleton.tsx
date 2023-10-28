import { FC, memo } from "react";

import { VideoCardSkeleton } from "../../VideoCard";

import styles from "./HorizontalVideoCardList.module.scss";

export interface HorizontalVideoCardListSkeletonProps {
    type: "horizontal";
    skeleton: number;
}

const HorizontalVideoCardListSkeleton: FC<
    HorizontalVideoCardListSkeletonProps
> = ({ skeleton }) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.list}>
            {skeletons.map((skeleton) => (
                <VideoCardSkeleton key={skeleton} />
            ))}
        </div>
    );
};

export default memo(HorizontalVideoCardListSkeleton);
