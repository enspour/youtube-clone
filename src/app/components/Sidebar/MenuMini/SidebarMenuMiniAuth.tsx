"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

import styles from "../Sidebar.module.scss";

const SidebarMenuMiniAuth: FC = () => {
    return (
        <Menu>
            <MenuGroup>
                <MenuLink href="/">
                    <div className={styles["sidebar__item--mini"]}>Home</div>
                </MenuLink>

                <MenuLink href="/subscriptions">
                    <div className={styles["sidebar__item--mini"]}>
                        Subscriptions
                    </div>
                </MenuLink>

                <MenuLink href="/library">
                    <div className={styles["sidebar__item--mini"]}>Library</div>
                </MenuLink>

                <MenuLink href="/history">
                    <div className={styles["sidebar__item--mini"]}>History</div>
                </MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuMiniAuth;
