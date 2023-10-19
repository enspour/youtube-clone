"use client";

import { FC } from "react";

import { Menu, MenuGroup, MenuLink } from "@/components/ui/Menu";

const SidebarMenuUnAuth: FC = () => {
    return (
        <Menu>
            <MenuGroup>
                <MenuLink href="/">Home</MenuLink>
                <MenuLink href="/subscriptions">Subscriptions</MenuLink>
            </MenuGroup>

            <MenuGroup>
                <MenuLink href="/library">Library</MenuLink>
                <MenuLink href="/history">History</MenuLink>
            </MenuGroup>
        </Menu>
    );
};

export default SidebarMenuUnAuth;
