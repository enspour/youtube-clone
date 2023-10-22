import { FC, memo } from "react";

import { ObservableAnchor } from "@/components/utils/ObservableAnchor";
import { VideoCard, VideoCardSkeleton } from "../VideoCard";

import { Video } from "@/interfaces";

import styles from "./VideoGallery.module.scss";

interface VideoGalleryProps {
    videos: Video[];
    skeleton?: number;
    onEnd?: () => void;
}

const VideoGallery: FC<VideoGalleryProps> = ({
    videos,
    skeleton = 0,
    onEnd,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.container}>
            <div className={styles.videos}>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}

                {skeletons.map((skeleton) => (
                    <VideoCardSkeleton key={skeleton} />
                ))}

                <ObservableAnchor onVisible={onEnd} />
            </div>
        </div>
    );
};

export default memo(VideoGallery);
