import { Suspense } from "react";

import { getVideo } from "@/server-actions/videos";

import { Comments } from "./components/Comments";
import { Information } from "./components/Information";
import { Player } from "./components/Player";
import { Suggested, SuggestedSkeleton } from "./components/Suggested";

import styles from "./page.module.scss";

interface PageProps {
    params: { id: string };
}

export default async function Page({ params }: PageProps) {
    const { id } = params;

    const video = await getVideo(id);

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Player video={video} />

                <div className={styles.main}>
                    <Information video={video} />
                    <Comments video={video} />
                </div>

                <Suspense fallback={<SuggestedSkeleton />}>
                    <Suggested video={video} />
                </Suspense>
            </div>
        </div>
    );
}
