"use client";

import Link from "next/link";
import { FC } from "react";

import { Icon } from "@/components/ui/Icon";

import { useSidebar } from "@/hooks/client";

import SidebarIcon from "@/assets/icons/header/sidebar.svg";

import styles from "./Header.module.scss";

const Header: FC = () => {
    const { toggle } = useSidebar();

    return (
        <div className={styles.header}>
            <Icon svg={SidebarIcon} onClick={toggle} />
            <Link href="/">CloneTube</Link>
        </div>
    );
};

export default Header;
