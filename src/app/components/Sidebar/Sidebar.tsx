"use client";

import { FC } from "react";

import SidebarDynamic from "./SidebarDynamic";
import SidebarStatic from "./SidebarStatic";

import { useIsVideoPage } from "@/hooks/client";

import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
    const isVideoPage = useIsVideoPage();

    if (isVideoPage) {
        return (
            <div className={styles.container}>
                <SidebarDynamic />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <SidebarStatic />
            <SidebarDynamic />
        </div>
    );
};

export default Sidebar;
