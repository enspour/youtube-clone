"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

const SidebarMenuAuth: FC = () => {
    return (
        <Menu>
            <MenuGroup>
                <MenuLink href="/">Home</MenuLink>
                <MenuLink href="/subscriptions">Subscriptions</MenuLink>
            </MenuGroup>

            <MenuGroup>
                <MenuLink href="/library">Library</MenuLink>
                <MenuLink href="/history">History</MenuLink>
                <MenuLink href="/playlist/wl">Watch later</MenuLink>
            </MenuGroup>

            <MenuGroup title="Subscriptions">
                <MenuLink href="/channel/channel">Channels</MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuAuth;
