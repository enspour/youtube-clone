import { FC, memo } from "react";

import { VideoCard } from "../../VideoCard";

import { Video } from "@/interfaces";

import styles from "./HorizontalVideoList.module.scss";

export interface HorizontalVideoListProps {
    type: "horizontal";
    videos: Video[];
}

const HorizontalVideoList: FC<HorizontalVideoListProps> = ({ videos }) => {
    return (
        <div className={styles.videos}>
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
};

export default memo(HorizontalVideoList);
