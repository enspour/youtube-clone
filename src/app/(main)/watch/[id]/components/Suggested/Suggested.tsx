import { memo } from "react";

import { VideoList } from "@/components/ui/VideoList";

import { videosApi } from "@/api";

import { Video, isSuccessResponse } from "@/interfaces";

import styles from "./Suggested.module.scss";

interface SuggestedProps {
    video: Video;
}

const Suggested = async ({ video }: SuggestedProps) => {
    const response = await videosApi.fetchSuggestionsById(video.id, 0, 10);

    if (isSuccessResponse(response)) {
        const { data } = response;

        return (
            <div className={styles.suggested}>
                <div className={styles.suggested__vertical}>
                    <VideoList type="vertical" videos={data} />
                </div>

                <div className={styles.suggested__horizontal}>
                    <VideoList type="horizontal" videos={data} />
                </div>
            </div>
        );
    }

    return null;
};

export default memo(Suggested);
