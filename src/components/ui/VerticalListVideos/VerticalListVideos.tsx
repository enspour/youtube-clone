import { FC, memo } from "react";

import { VideoCard } from "../VideoCard";

import { Video } from "@/interfaces";

import styles from "./VerticalListVideos.module.scss";

interface VerticalListVideosProps {
    videos: Video[];
}

const VerticalListVideos: FC<VerticalListVideosProps> = ({ videos }) => {
    return (
        <div className={styles.videos}>
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    video={video}
                    direction="horizontal"
                />
            ))}
        </div>
    );
};

export default memo(VerticalListVideos);
