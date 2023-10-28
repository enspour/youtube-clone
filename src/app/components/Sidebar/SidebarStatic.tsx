"use client";

import { FC, ReactNode } from "react";

import { useSidebarStore } from "@/stores";

import { classes } from "@/utils";

import styles from "./Sidebar.module.scss";

interface SidebarStaticProps {
    normal: ReactNode;
    minimized: ReactNode;
}

const SidebarStatic: FC<SidebarStaticProps> = ({ normal, minimized }) => {
    const isMinimized = useSidebarStore((state) => state.isMinimized);

    return (
        <div
            className={classes(
                styles.sidebar,
                styles.sidebar__static,
                isMinimized ? styles["sidebar--mini"] : styles["sidebar--full"]
            )}
        >
            {!isMinimized ? normal : minimized}
        </div>
    );
};

export default SidebarStatic;
