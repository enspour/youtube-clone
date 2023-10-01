"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

import useInitialActiveId from "../useInitialActiveId";

const SidebarMenuUnAuth: FC = () => {
    const initialActiveId = useInitialActiveId();

    return (
        <Menu initialActiveId={initialActiveId}>
            <MenuGroup>
                <MenuLink id="home" href="/">
                    Главная
                </MenuLink>

                <MenuLink id="subs" href="/subscriptions">
                    Подписки
                </MenuLink>
            </MenuGroup>

            <MenuGroup>
                <MenuLink id="library" href="/library">
                    Библиотека
                </MenuLink>

                <MenuLink id="history" href="/history">
                    История
                </MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuUnAuth;
