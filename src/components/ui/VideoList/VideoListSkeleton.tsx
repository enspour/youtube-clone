import { FC } from "react";

import HorizontalVideoListSkeleton, {
    HorizontalVideoListSkeletonProps,
} from "./HorizontalVideoList/HorizontalVideoListSkeleton";

import VerticalVideoListSkeleton, {
    VerticalVideoListSkeletonProps,
} from "./VerticalVideoList/VerticalVideoListSkeleton";

type VideoListSkeletonProps =
    | HorizontalVideoListSkeletonProps
    | VerticalVideoListSkeletonProps;

const VideoListSkeleton: FC<VideoListSkeletonProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "horizontal":
            return <HorizontalVideoListSkeleton {...props} />;
        case "vertical":
            return <VerticalVideoListSkeleton {...props} />;
    }
};

export default VideoListSkeleton;
