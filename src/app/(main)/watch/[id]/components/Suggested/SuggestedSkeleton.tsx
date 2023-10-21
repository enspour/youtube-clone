import { FC, memo } from "react";

import { VideoListSkeleton } from "@/components/ui/VideoList";

import styles from "./Suggested.module.scss";

const SuggestedSkeleton: FC = () => {
    return (
        <div className={styles.suggested}>
            <div className={styles.suggested__vertical}>
                <VideoListSkeleton type="vertical" count={10} />
            </div>

            <div className={styles.suggested__horizontal}>
                <VideoListSkeleton type="horizontal" count={10} />
            </div>
        </div>
    );
};

export default memo(SuggestedSkeleton);
