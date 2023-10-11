import { VideoGallery } from "@/components/ui/VideoGallery";

import { fetchVideos } from "@/server-actions/videos";

import styles from "./page.module.scss";

export default async function Page() {
    const videos = await fetchVideos(0, 20);

    return (
        <div className={styles.gallery}>
            <VideoGallery videos={videos} />
        </div>
    );
}
