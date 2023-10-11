import { FC, RefObject } from "react";

import VideoPlayerFullscreen from "./controls/VideoPlayerFullscreen";
import VideoPlayerNext from "./controls/VideoPlayerNext";
import VideoPlayerPlayPause from "./controls/VideoPlayerPlayPause";
import VideoPlayerPrev from "./controls/VideoPlayerPrev";
import VideoPlayerTime from "./controls/VideoPlayerTime";
import VideoPlayerTrack from "./controls/VideoPlayerTrack";
import VideoPlayerVolume from "./controls/VideoPlayerVolume";

import styles from "./VideoPlayer.module.scss";

interface VideoPlayerFooterProps {
    playerRef: RefObject<HTMLDivElement>;
}

const VideoPlayerFooter: FC<VideoPlayerFooterProps> = ({ playerRef }) => {
    return (
        <div className={styles.footer}>
            <VideoPlayerTrack />

            <div className="flex justify-between items-center px-1">
                <div className={styles.footer__left}>
                    <VideoPlayerPrev />
                    <VideoPlayerPlayPause />
                    <VideoPlayerNext />
                    <VideoPlayerVolume />
                    <VideoPlayerTime />
                </div>

                <div className={styles.footer__right}>
                    <VideoPlayerFullscreen playerRef={playerRef} />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerFooter;
