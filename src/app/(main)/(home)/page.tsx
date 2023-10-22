"use client";

import { useEffect } from "react";

import {
    VideoGallery,
    VideoGallerySkeleton,
} from "@/components/ui/VideoGallery";

import { useHomeVideosStore } from "@/stores";

import styles from "./page.module.scss";

export default function Page() {
    const status = useHomeVideosStore((state) => state.status);
    const videos = useHomeVideosStore((state) => state.items);
    const offset = useHomeVideosStore((state) => state.offset);

    const fetch = useHomeVideosStore((state) => state.fetch);

    const onEnd = () => {
        fetch();
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className={styles.gallery}>
            {videos.length === 0 ? (
                <VideoGallerySkeleton skeleton={offset} />
            ) : status === "pending" ? (
                <VideoGallery videos={videos} skeleton={offset} />
            ) : (
                <VideoGallery videos={videos} onEnd={onEnd} />
            )}
        </div>
    );
}
