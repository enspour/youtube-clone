import { MainSkeleton } from "./components/Main";
import { PlayerSkeleton } from "./components/Player";
import { SidebarSkeleton } from "./components/Sidebar";

import styles from "./page.module.scss";

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <PlayerSkeleton />
                <MainSkeleton />
                <SidebarSkeleton />
            </div>
        </div>
    );
}
