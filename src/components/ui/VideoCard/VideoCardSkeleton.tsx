import { CSSProperties, FC, memo } from "react";

import { Skeleton } from "../Skeleton";
import { UserAvatarSkeleton } from "../UserAvatar";
import { VideoCardDirection } from "./VideoCard";

import styles from "./VideoCard.module.scss";

interface VideoCardSkeletonProps {
    direction?: VideoCardDirection;
}

const VideoCardSkeleton: FC<VideoCardSkeletonProps> = ({
    direction = "vertical",
}) => {
    return (
        <div className={styles.video} style={getVideoStyles(direction)}>
            <div className={styles.preview}>
                <Skeleton type="rectangle" width="40rem" height="22.5rem" />
            </div>

            <div className={styles.info}>
                {direction === "vertical" && (
                    <UserAvatarSkeleton diameter="3.6rem" />
                )}

                <div>
                    <div className={styles.info__name}>
                        <Skeleton type="text" width="20rem" fontSize="1.8rem" />
                    </div>

                    <div className={styles.info__username}>
                        <Skeleton type="text" width="10rem" fontSize="1.4rem" />
                    </div>

                    <div className={styles.info__stats}>
                        <Skeleton type="text" width="16rem" fontSize="1.4rem" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const getVideoStyles = (direction: VideoCardDirection): CSSProperties => ({
    flexDirection: direction === "horizontal" ? "row" : "column",
    cursor: "wait",
});

export default memo(VideoCardSkeleton);
