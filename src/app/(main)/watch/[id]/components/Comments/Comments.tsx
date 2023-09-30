import { FC, memo } from "react";

import { Video } from "@/interfaces";

interface CommentsProps {
    video: Video;
}

const Comments: FC<CommentsProps> = ({ video }) => {
    return <div></div>;
};

export default memo(Comments);
