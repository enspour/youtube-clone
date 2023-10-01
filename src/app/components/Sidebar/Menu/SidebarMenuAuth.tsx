"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

import useInitialActiveId from "../useInitialActiveId";

const SidebarMenuAuth: FC = () => {
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

                <MenuLink id="playlist/wl" href="/playlist/wl">
                    Смотреть позже
                </MenuLink>
            </MenuGroup>

            <MenuGroup title="Подписки">
                <MenuLink href="/channel/channel">Channels</MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuAuth;
