import { VideoGallery } from "@/components/ui/VideoGallery";

import { VideosApi } from "@/api";

import styles from "./page.module.scss";

export default async function Page() {
    const videos = await VideosApi.fetchSuggestions(0, 20);

    return (
        <div className={styles.gallery}>
            <VideoGallery videos={videos} />
        </div>
    );
}
