import { FC, memo } from "react";

import { ObservableAnchor } from "@/components/utils/ObservableAnchor";
import { VideoCard, VideoCardSkeleton } from "../../VideoCard";

import { Video } from "@/interfaces";

import styles from "./HorizontalVideoCardList.module.scss";

export interface HorizontalVideoCardListProps {
    type: "horizontal";
    videos: Video[];
    skeleton?: number;
    onEnd?: () => void;
}

const HorizontalVideoCardList: FC<HorizontalVideoCardListProps> = ({
    videos,
    skeleton = 0,
    onEnd,
}) => {
    const skeletons = [...new Array(skeleton)].map((_, skeleton) => skeleton);

    return (
        <div className={styles.list}>
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

export default memo(HorizontalVideoCardList);
