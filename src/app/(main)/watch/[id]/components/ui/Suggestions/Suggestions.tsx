import { FC, memo } from "react";

import { VideoList } from "@/components/ui/VideoList";

import { Video } from "@/interfaces";

import styles from "./Suggestions.module.scss";

interface SuggestionsProps {
    videos: Video[];
    skeleton?: number;
    onEnd?: () => void;
}

const Suggestions: FC<SuggestionsProps> = ({ videos, skeleton, onEnd }) => {
    return (
        <div className={styles.suggestions}>
            <div className={styles.suggestions__vertical}>
                <VideoList
                    type="vertical"
                    videos={videos}
                    skeleton={skeleton}
                    onEnd={onEnd}
                />
            </div>

            <div className={styles.suggestions__horizontal}>
                <VideoList
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
