import { FC, memo } from "react";

import { VideoCard } from "../../VideoCard";

import { Video } from "@/interfaces";

import styles from "./VerticalVideoList.module.scss";

export interface VerticalVideoListProps {
    type: "vertical";
    videos: Video[];
}

const VerticalVideoList: FC<VerticalVideoListProps> = ({ videos }) => {
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

export default memo(VerticalVideoList);
