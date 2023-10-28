import { FC } from "react";

import {
    HorizontalVideoCardListSkeleton,
    HorizontalVideoCardListSkeletonProps,
} from "./HorizontalVideoCardList";

import {
    VerticalVideoCardListSkeleton,
    VerticalVideoCardListSkeletonProps,
} from "./VerticalVideoCardList";

type VideoCardListSkeletonProps =
    | HorizontalVideoCardListSkeletonProps
    | VerticalVideoCardListSkeletonProps;

const VideoCardListSkeleton: FC<VideoCardListSkeletonProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "horizontal":
            return <HorizontalVideoCardListSkeleton {...props} />;
        case "vertical":
            return <VerticalVideoCardListSkeleton {...props} />;
    }
};

export default VideoCardListSkeleton;
