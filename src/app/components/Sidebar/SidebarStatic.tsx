"use client";

import { FC } from "react";

import SidebarMenu from "./SidebarMenu";
import SidebarMenuMini from "./SidebarMenuMini";

import { useSidebarStore } from "@/stores";

import { classes } from "@/utils";

import styles from "./Sidebar.module.scss";

const SidebarStatic: FC = () => {
    const isMinimized = useSidebarStore((state) => state.isMinimized);

    return (
        <div
            className={classes(
                styles.sidebar,
                styles.sidebar__static,
                isMinimized ? styles.sidebar__mini : styles.sidebar__full
            )}
        >
            {isMinimized ? <SidebarMenuMini /> : <SidebarMenu />}
        </div>
    );
};

export default SidebarStatic;
