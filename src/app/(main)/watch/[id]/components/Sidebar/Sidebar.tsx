"use client";

import { FC, useEffect } from "react";

import { Suggestions, SuggestionsSkeleton } from "../ui/Suggestions";

import { useWatchSidebarVideosStore } from "@/stores";

import { Video } from "@/interfaces";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
    video: Video;
}

const Sidebar: FC<SidebarProps> = ({ video }) => {
    const status = useWatchSidebarVideosStore((state) => state.status);
    const videos = useWatchSidebarVideosStore((state) => state.items);
    const offset = useWatchSidebarVideosStore((state) => state.offset);

    const fetch = useWatchSidebarVideosStore((state) => state.fetch);

    const onEnd = () => {
        fetch(video.id);
    };

    useEffect(() => {
        fetch(video.id);
    }, []);

    return (
        <div className={styles.sidebar}>
            {videos.length === 0 ? (
                <SuggestionsSkeleton skeleton={offset} />
            ) : status === "pending" ? (
                <Suggestions videos={videos} skeleton={offset} />
            ) : (
                <Suggestions videos={videos} onEnd={onEnd} />
            )}
        </div>
    );
};

export default Sidebar;
