import { FC, memo } from "react";

import { HorizontalListVideosSkeleton } from "@/components/ui/HorizontalListVideos";
import { VerticalListVideosSkeleton } from "@/components/ui/VerticalListVideos";

import styles from "./Suggested.module.scss";

const SuggestedSkeleton: FC = () => {
    return (
        <div className={styles.suggested}>
            <div className={styles.suggested__vertical}>
                <VerticalListVideosSkeleton count={10} />
            </div>

            <div className={styles.suggested__horizontal}>
                <HorizontalListVideosSkeleton count={10} />
            </div>
        </div>
    );
};

export default memo(SuggestedSkeleton);
