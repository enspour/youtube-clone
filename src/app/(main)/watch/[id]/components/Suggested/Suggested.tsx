import { memo } from "react";

import { VideoList } from "@/components/ui/VideoList";

import { VideosApi } from "@/api";

import { Video } from "@/interfaces";

import styles from "./Suggested.module.scss";

interface SuggestedProps {
    video: Video;
}

const Suggested = async ({ video }: SuggestedProps) => {
    const videos = await VideosApi.fetchSuggestionsById(video.id, 0, 10);

    return (
        <div className={styles.suggested}>
            <div className={styles.suggested__vertical}>
                <VideoList type="vertical" videos={videos} />
            </div>

            <div className={styles.suggested__horizontal}>
                <VideoList type="horizontal" videos={videos} />
            </div>
        </div>
    );
};

export default memo(Suggested);
