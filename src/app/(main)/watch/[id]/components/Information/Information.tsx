import { FC, memo } from "react";

import { Video } from "@/interfaces";

interface InformationProps {
    video: Video;
}

const Information: FC<InformationProps> = ({ video }) => {
    return <div>{video.name}</div>;
};

export default memo(Information);
