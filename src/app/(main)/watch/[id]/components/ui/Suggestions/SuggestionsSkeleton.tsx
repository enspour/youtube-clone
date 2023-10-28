import { FC, memo } from "react";

import { VideoCardListSkeleton } from "@/components/ui/VideoCardList";

import styles from "./Suggestions.module.scss";

interface SuggestionsSkeletonProps {
    skeleton: number;
}

const SuggestionsSkeleton: FC<SuggestionsSkeletonProps> = ({ skeleton }) => {
    return (
        <div className={styles.suggestions}>
            <div className={styles.suggestions__vertical}>
                <VideoCardListSkeleton type="vertical" skeleton={skeleton} />
            </div>

            <div className={styles.suggestions__horizontal}>
                <VideoCardListSkeleton type="horizontal" skeleton={skeleton} />
            </div>
        </div>
    );
};

export default memo(SuggestionsSkeleton);
