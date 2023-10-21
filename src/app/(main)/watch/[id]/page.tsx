import { Suspense } from "react";

import { Comments } from "./components/Comments";
import { Information } from "./components/Information";
import { Player } from "./components/Player";
import { Suggested, SuggestedSkeleton } from "./components/Suggested";

import { videosApi } from "@/api";

import { isSuccessResponse } from "@/interfaces";

import styles from "./page.module.scss";

interface PageProps {
    params: { id: string };
}

export default async function Page({ params }: PageProps) {
    const { id } = params;

    const response = await videosApi.fetchOne(id);

    if (isSuccessResponse(response)) {
        const { data } = response;

        if (!data) {
            return null;
        }

        return (
            <div className={styles.container}>
                <div className={styles.layout}>
                    <Player video={data} />

                    <div className={styles.main}>
                        <Information video={data} />
                        <Comments video={data} />
                    </div>

                    <Suspense fallback={<SuggestedSkeleton />}>
                        <Suggested video={data} />
                    </Suspense>
                </div>
            </div>
        );
    }
}
