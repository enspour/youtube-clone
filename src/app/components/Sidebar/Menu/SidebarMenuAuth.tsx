"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

const SidebarMenuAuth: FC = () => {
    return (
        <Menu>
            <MenuGroup>
                <MenuLink href="/">Главная</MenuLink>
                <MenuLink href="/subscriptions">Подписки</MenuLink>
            </MenuGroup>

            <MenuGroup>
                <MenuLink href="/library">Библиотека</MenuLink>
                <MenuLink href="/history">История</MenuLink>
                <MenuLink href="/playlist/wl">Смотреть позже</MenuLink>
            </MenuGroup>

            <MenuGroup title="Подписки">
                <MenuLink href="/channel/channel">Channels</MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuAuth;
