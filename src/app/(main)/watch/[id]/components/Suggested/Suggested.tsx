import { memo } from "react";

import { HorizontalListVideos } from "@/components/ui/HorizontalListVideos";
import { VerticalListVideos } from "@/components/ui/VerticalListVideos";

import { getSuggestedVideos } from "@/server-actions/videos";

import { Video } from "@/interfaces";

import styles from "./Suggested.module.scss";

interface SuggestedProps {
    video: Video;
}

const Suggested = async ({ video }: SuggestedProps) => {
    const videos = await getSuggestedVideos(video.id, 0, 10);

    return (
        <div className={styles.suggested}>
            <div className={styles.suggested__vertical}>
                <VerticalListVideos videos={videos} />
            </div>

            <div className={styles.suggested__horizontal}>
                <HorizontalListVideos videos={videos} />
            </div>
        </div>
    );
};

export default memo(Suggested);
