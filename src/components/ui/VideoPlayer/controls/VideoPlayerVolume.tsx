"use client";

import { FC } from "react";

import { Icon } from "../../Icon";
import { Input } from "../../Input";

import { useVideoPlayerVolume } from "@/hooks/client";

import HighVolume from "@/assets/icons/player/high-volume.svg";
import MediumVolume from "@/assets/icons/player/medium-volume.svg";
import MutedVolume from "@/assets/icons/player/muted-volume.svg";

import styles from "../VideoPlayer.module.scss";

const VideoPlayerVolumeIcon: FC = () => {
    const [volume] = useVideoPlayerVolume();

    const toggle = () => {};

    return (
        <div className={styles.footer__volume__icon}>
            {volume === 0 ? (
                <Icon svg={MutedVolume} onClick={toggle} />
            ) : volume < 0.6 ? (
                <Icon svg={MediumVolume} onClick={toggle} />
            ) : (
                <Icon svg={HighVolume} onClick={toggle} />
            )}
        </div>
    );
};

const VideoPlayerVolumeRange: FC = () => {
    const [volume, setVolume] = useVideoPlayerVolume();

    return (
        <div className={styles.footer__volume__range}>
            <Input
                type="range"
                value={volume}
                setValue={setVolume}
                min={0}
                max={1}
                step={0.01}
            />
        </div>
    );
};

const VideoPlayerVolume: FC = () => {
    return (
        <div className={styles.footer__volume}>
            <VideoPlayerVolumeIcon />
            <VideoPlayerVolumeRange />
        </div>
    );
};

export default VideoPlayerVolume;
