"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

import styles from "../Sidebar.module.scss";

const SidebarMenuMiniUnAuth: FC = () => {
    return (
        <Menu>
            <MenuGroup>
                <MenuLink href="/">
                    <div className={styles.sidebar__mini__item}>Главная</div>
                </MenuLink>

                <MenuLink href="/subscriptions">
                    <div className={styles.sidebar__mini__item}>Подписки</div>
                </MenuLink>

                <MenuLink href="/library">
                    <div className={styles.sidebar__mini__item}>Библиотека</div>
                </MenuLink>

                <MenuLink href="/history">
                    <div className={styles.sidebar__mini__item}>История</div>
                </MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuMiniUnAuth;
