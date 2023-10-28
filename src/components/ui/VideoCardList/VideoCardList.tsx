import { FC } from "react";

import {
    HorizontalVideoCardList,
    HorizontalVideoCardListProps,
} from "./HorizontalVideoCardList";

import {
    VerticalVideoCardList,
    VerticalVideoCardListProps,
} from "./VerticalVideoCardList";

type VideoCardListProps =
    | HorizontalVideoCardListProps
    | VerticalVideoCardListProps;

const VideoCardList: FC<VideoCardListProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "horizontal":
            return <HorizontalVideoCardList {...props} />;
        case "vertical":
            return <VerticalVideoCardList {...props} />;
    }
};

export default VideoCardList;
