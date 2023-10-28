import { FC, memo } from "react";

import { VideoCardSkeleton } from "../../VideoCard";

import styles from "./VerticalVideoCardList.module.scss";

export interface VerticalVideoCardListSkeletonProps {
    type: "vertical";
    skeleton: number;
}

const VerticalVideoCardListSkeleton: FC<VerticalVideoCardListSkeletonProps> = ({
    skeleton,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.list}>
            {skeletons.map((skeleton) => (
                <VideoCardSkeleton key={skeleton} direction="horizontal" />
            ))}
        </div>
    );
};

export default memo(VerticalVideoCardListSkeleton);
