import { CommentsSkeleton } from "./components/Comments";
import { InformationSkeleton } from "./components/Information";
import { PlayerSkeleton } from "./components/Player";
import { SuggestedSkeleton } from "./components/Suggested";

import styles from "./page.module.scss";

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <PlayerSkeleton />

                <div className={styles.main}>
                    <InformationSkeleton />
                    <CommentsSkeleton />
                </div>

                <SuggestedSkeleton />
            </div>
        </div>
    );
}
