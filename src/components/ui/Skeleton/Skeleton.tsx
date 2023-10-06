import { FC, memo } from "react";

import SkeletonCircle, { SkeletonCircleProps } from "./SkeletonCircle";
import SkeletonRectangle, { SkeletonRectangleProps } from "./SkeletonRectangle";
import SkeletonText, { SkeletonTextProps } from "./SkeletonText";

type SkeletonProps =
    | SkeletonRectangleProps
    | SkeletonCircleProps
    | SkeletonTextProps;

const Skeleton: FC<SkeletonProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "rectangle":
            return <SkeletonRectangle {...props} />;
        case "circle":
            return <SkeletonCircle {...props} />;
        case "text":
            return <SkeletonText {...props} />;
    }
};

export default memo(Skeleton);
