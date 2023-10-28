import { FC, memo } from "react";

import { ObservableAnchor } from "@/components/utils/ObservableAnchor";
import { VideoCard, VideoCardSkeleton } from "../../VideoCard";

import { Video } from "@/interfaces";

import styles from "./VerticalVideoCardList.module.scss";

export interface VerticalVideoCardListProps {
    type: "vertical";
    videos: Video[];
    skeleton?: number;
    onEnd?: () => void;
}

const VerticalVideoCardList: FC<VerticalVideoCardListProps> = ({
    videos,
    skeleton = 0,
    onEnd,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.list}>
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

export default memo(VerticalVideoCardList);
