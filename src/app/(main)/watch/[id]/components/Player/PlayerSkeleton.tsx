import { FC, memo } from "react";

import { VideoPlayerSkeleton } from "@/components/ui/VideoPlayer";

import styles from "./Player.module.scss";

const PlayerSkeleton: FC = () => {
    return (
        <div className={styles.player}>
            <VideoPlayerSkeleton />
        </div>
    );
};

export default memo(PlayerSkeleton);
