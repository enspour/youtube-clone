"use client";

import { useEffect } from "react";

import {
    VideoGallery,
    VideoGallerySkeleton,
    VideoGalleryWithSkeleton,
} from "@/components/ui/VideoGallery";

import { InfinityScroll } from "@/components/utils/InfinityScroll";

import { useHomePageVideosStore } from "@/stores";

import styles from "./page.module.scss";

export default function Page() {
    const status = useHomePageVideosStore((state) => state.status);
    const videos = useHomePageVideosStore((state) => state.videos);
    const offset = useHomePageVideosStore((state) => state.offset);

    const fetch = useHomePageVideosStore((state) => state.fetch);

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className={styles.gallery}>
            <InfinityScroll fetchData={fetch}>
                {status === "pending" && videos.length === 0 ? (
                    <VideoGallerySkeleton count={offset} />
                ) : status === "pending" ? (
                    <VideoGalleryWithSkeleton videos={videos} count={offset} />
                ) : (
                    <VideoGallery videos={videos} />
                )}
            </InfinityScroll>
        </div>
    );
}
