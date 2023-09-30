"use client";

import { CSSProperties, FC, useRef } from "react";

import SidebarMenu from "./SidebarMenu";

import { useIsVideoPage, useOutsideClick } from "@/hooks/client";

import { useSidebarStore } from "@/stores";

import { classes } from "@/utils";

import styles from "./Sidebar.module.scss";

const SidebarDynamic: FC = () => {
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
            <SidebarMenu />
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
