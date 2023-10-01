"use client";

import { FC, ReactNode } from "react";

import SidebarDynamic from "./SidebarDynamic";
import SidebarStatic from "./SidebarStatic";

import { useIsVideoPage } from "@/hooks/client";

import styles from "./Sidebar.module.scss";

interface SidebarContainerProps {
    normal: ReactNode;
    minimized: ReactNode;
}

const SidebarContainer: FC<SidebarContainerProps> = ({ normal, minimized }) => {
    const isVideoPage = useIsVideoPage();

    return (
        <div className={styles.container}>
            {!isVideoPage && (
                <SidebarStatic normal={normal} minimized={minimized} />
            )}

            <SidebarDynamic normal={normal} />
        </div>
    );
};

export default SidebarContainer;
