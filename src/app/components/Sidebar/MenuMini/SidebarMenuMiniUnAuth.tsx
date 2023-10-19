"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

import styles from "../Sidebar.module.scss";

const SidebarMenuMiniUnAuth: FC = () => {
    return (
        <Menu>
            <MenuGroup>
                <MenuLink href="/">
                    <div className={styles.sidebar__mini__item}>Home</div>
                </MenuLink>

                <MenuLink href="/subscriptions">
                    <div className={styles.sidebar__mini__item}>
                        Subscriptions
                    </div>
                </MenuLink>

                <MenuLink href="/library">
                    <div className={styles.sidebar__mini__item}>Library</div>
                </MenuLink>

                <MenuLink href="/history">
                    <div className={styles.sidebar__mini__item}>History</div>
                </MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuMiniUnAuth;
