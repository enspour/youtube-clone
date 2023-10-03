"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

const SidebarMenuUnAuth: FC = () => {
    return (
        <Menu>
            <MenuGroup>
                <MenuLink href="/">Главная</MenuLink>
                <MenuLink href="/subscriptions">Подписки</MenuLink>
            </MenuGroup>

            <MenuGroup>
                <MenuLink href="/library">Библиотека</MenuLink>
                <MenuLink href="/history">История</MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuUnAuth;
