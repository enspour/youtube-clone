import { FC, memo } from "react";

import { VideoListSkeleton } from "@/components/ui/VideoList";

import styles from "./Suggestions.module.scss";

interface SuggestionsSkeletonProps {
    skeleton: number;
}

const SuggestionsSkeleton: FC<SuggestionsSkeletonProps> = ({ skeleton }) => {
    return (
        <div className={styles.suggestions}>
            <div className={styles.suggestions__vertical}>
                <VideoListSkeleton type="vertical" skeleton={skeleton} />
            </div>

            <div className={styles.suggestions__horizontal}>
                <VideoListSkeleton type="horizontal" skeleton={skeleton} />
            </div>
        </div>
    );
};

export default memo(SuggestionsSkeleton);
