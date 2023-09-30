import { VideoGallery } from "@/components/ui/VideoGallery";

import { getVideos } from "@/server-actions/videos";

import styles from "./page.module.scss";

export default async function Page() {
    const videos = await getVideos(0, 20);

    return (
        <div className={styles.gallery}>
            <VideoGallery videos={videos} />
        </div>
    );
}