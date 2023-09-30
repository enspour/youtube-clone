"use client";

import { FC } from "react";

import useInitialActiveId from "./useInitialActiveId";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

import styles from "./Sidebar.module.scss";

const SidebarMenuMini: FC = () => {
    const initialActiveId = useInitialActiveId();

    return (
        <Menu initialActiveId={initialActiveId}>
            <MenuGroup>
                <MenuLink id="home" href="/">
                    <div className={styles.sidebar__mini__item}>Главная</div>
                </MenuLink>

                <MenuLink id="subs" href="/subscriptions">
                    <div className={styles.sidebar__mini__item}>Подписки</div>
                </MenuLink>

                <MenuLink id="library" href="/library">
                    <div className={styles.sidebar__mini__item}>Библиотека</div>
                </MenuLink>

                <MenuLink id="history" href="/history">
                    <div className={styles.sidebar__mini__item}>История</div>
                </MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuMini;
