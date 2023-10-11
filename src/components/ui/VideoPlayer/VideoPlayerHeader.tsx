import { FC, RefObject } from "react";

import VideoPlayerMinimize from "./controls/VideoPlayerMinimize";

import styles from "./VideoPlayer.module.scss";

interface VideoPlayerHeaderProps {
    playerRef: RefObject<HTMLDivElement>;
}

const VideoPlayerHeader: FC<VideoPlayerHeaderProps> = ({ playerRef }) => {
    return (
        <div className={styles.header}>
            <div className="flex justify-between items-center px-1">
                <VideoPlayerMinimize />
            </div>
        </div>
    );
};

export default VideoPlayerHeader;
