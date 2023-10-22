import { Main } from "./components/Main";
import { Player } from "./components/Player";
import { Sidebar } from "./components/Sidebar";

import { videosApi } from "@/api";

import { isSuccessResponse } from "@/interfaces";

import styles from "./page.module.scss";

interface PageProps {
    params: { id: string };
}

export default async function Page({ params }: PageProps) {
    const { id } = params;

    const response = await videosApi.fetchOne(id);

    if (!isSuccessResponse(response)) {
        return null;
    }

    const { data } = response;

    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Player video={data} />
                <Main video={data} />
                <Sidebar video={data} />
            </div>
        </div>
    );
}
