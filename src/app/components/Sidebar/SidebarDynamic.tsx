"use client";

import { CSSProperties, FC, ReactNode, useRef } from "react";

import { useIsVideoPage, useOutsideClick } from "@/hooks/client";

import { useSidebarStore } from "@/stores";

import { classes } from "@/utils";

import styles from "./Sidebar.module.scss";

interface SidebarDynamicProps {
    normal: ReactNode;
}

const SidebarDynamic: FC<SidebarDynamicProps> = ({ normal }) => {
    const sidebarRef = useRef(null);

    const isVideoPage = useIsVideoPage();

    const isOpen = useSidebarStore((state) => state.isOpen);
    const close = useSidebarStore((state) => state.close);

    useOutsideClick(sidebarRef, close, [isOpen]);

    return (
        <div
            ref={sidebarRef}
            className={classes(
                styles.sidebar,
                styles.sidebar__full,
                styles.sidebar__dynamic,
                isOpen
                    ? styles.sidebar__dynamic__open
                    : styles.sidebar__dynamic__close
            )}
            style={getStyle(isVideoPage)}
        >
            {normal}
        </div>
    );
};

const getStyle = (isVideoPage: boolean): CSSProperties => {
    if (isVideoPage) {
        return { display: "block" };
    }

    return {};
};

export default SidebarDynamic;
