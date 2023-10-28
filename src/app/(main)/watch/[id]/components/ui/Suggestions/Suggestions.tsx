import { FC, memo } from "react";

import { VideoCardList } from "@/components/ui/VideoCardList";

import { Video } from "@/interfaces";

import styles from "./Suggestions.module.scss";

interface SuggestionsProps {
    videos: Video[];
    skeleton?: number;
    onEnd?: () => void;
}

const Suggestions: FC<SuggestionsProps> = ({ videos, skeleton, onEnd }) => {
    return (
        <div>
            <div className={styles.suggestions__vertical}>
                <VideoCardList
                    type="vertical"
                    videos={videos}
                    skeleton={skeleton}
                    onEnd={onEnd}
                />
            </div>

            <div className={styles.suggestions__horizontal}>
                <VideoCardList
                    type="horizontal"
                    videos={videos}
                    skeleton={skeleton}
                    onEnd={onEnd}
                />
            </div>
        </div>
    );
};

export default memo(Suggestions);
