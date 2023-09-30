import { FC, memo } from "react";

import { Skeleton } from "../Skeleton";

import styles from "./VideoPlayer.module.scss";

const VideoPlayerSkeleton: FC = () => {
    return (
        <div className={styles.player}>
            <Skeleton
                type="rectangle"
                width="100%"
                height="100%"
                borderRadius="2rem"
            />
        </div>
    );
};

export default memo(VideoPlayerSkeleton);
