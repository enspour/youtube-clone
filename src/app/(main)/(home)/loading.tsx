import { VideoGallerySkeleton } from "@/components/ui/VideoGallery";

import styles from "./page.module.scss";

export default function Loading() {
    return (
        <div className={styles.gallery}>
            <VideoGallerySkeleton count={20} />
        </div>
    );
}
