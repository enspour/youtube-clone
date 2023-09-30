"use client";

import { useRouter } from "next/navigation";
import { FC, MouseEvent } from "react";

import { Video } from "@/interfaces";

import styles from "./VideoCard.module.scss";

interface VideoCardInfoUserProps {
    video: Video;
}

const VideoCardInfoUser: FC<VideoCardInfoUserProps> = ({ video }) => {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        router.push(`/channel/${video.owner.id}`);
    };

    return (
        <div className={styles.info__username} onClick={handleClick}>
            {video.owner.name}
        </div>
    );
};

export default VideoCardInfoUser;
