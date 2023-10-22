import { FC, memo } from "react";

import { ObservableAnchor } from "@/components/utils/ObservableAnchor";
import { VideoCard, VideoCardSkeleton } from "../../VideoCard";

import { Video } from "@/interfaces";

import styles from "./HorizontalVideoList.module.scss";

export interface HorizontalVideoListProps {
    type: "horizontal";
    videos: Video[];
    skeleton?: number;
    onEnd?: () => void;
}

const HorizontalVideoList: FC<HorizontalVideoListProps> = ({
    videos,
    skeleton = 0,
    onEnd,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.videos}>
            {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}

            {skeletons.map((skeleton) => (
                <VideoCardSkeleton key={skeleton} />
            ))}

            <ObservableAnchor onVisible={onEnd} />
        </div>
    );
};

export default memo(HorizontalVideoList);
