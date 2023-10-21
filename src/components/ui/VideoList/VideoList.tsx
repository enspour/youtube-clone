import { FC } from "react";

import HorizontalVideoList, {
    HorizontalVideoListProps,
} from "./HorizontalVideoList/HorizontalVideoList";

import VerticalVideoList, {
    VerticalVideoListProps,
} from "./VerticalVideoList/VerticalVideoList";

type VideoListProps = HorizontalVideoListProps | VerticalVideoListProps;

const VideoList: FC<VideoListProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "horizontal":
            return <HorizontalVideoList {...props} />;
        case "vertical":
            return <VerticalVideoList {...props} />;
    }
};

export default VideoList;
