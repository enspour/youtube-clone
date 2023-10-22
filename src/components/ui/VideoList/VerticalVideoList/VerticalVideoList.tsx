import { FC, memo } from "react";

import { ObservableAnchor } from "@/components/utils/ObservableAnchor";
import { VideoCard, VideoCardSkeleton } from "../../VideoCard";

import { Video } from "@/interfaces";

import styles from "./VerticalVideoList.module.scss";

export interface VerticalVideoListProps {
    type: "vertical";
    videos: Video[];
    skeleton?: number;
    onEnd?: () => void;
}

const VerticalVideoList: FC<VerticalVideoListProps> = ({
    videos,
    skeleton = 0,
    onEnd,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.videos}>
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    video={video}
                    direction="horizontal"
                />
            ))}

            {skeletons.map((skeleton) => (
                <VideoCardSkeleton key={skeleton} direction="horizontal" />
            ))}

            <ObservableAnchor onVisible={onEnd} />
        </div>
    );
};

export default memo(VerticalVideoList);
