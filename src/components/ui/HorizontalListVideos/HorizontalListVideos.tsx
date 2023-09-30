import { FC, memo } from "react";

import { VideoCard } from "../VideoCard";

import { Video } from "@/interfaces";

import styles from "./HorizontalListVideos.module.scss";

interface HorizontalListVideosProps {
    videos: Video[];
}

const HorizontalListVideos: FC<HorizontalListVideosProps> = ({ videos }) => {
    return (
        <div className={styles.videos}>
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

export default memo(HorizontalListVideos);
