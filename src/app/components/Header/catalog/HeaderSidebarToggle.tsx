"use client";

import { FC } from "react";

import { Icon } from "@/components/ui/Icon";

import { useSidebar } from "@/hooks/client";

import SidebarIcon from "@/assets/icons/header/sidebar.svg";

const HeaderSidebarToggle: FC = () => {
    const { toggle } = useSidebar();

    return <Icon svg={SidebarIcon} onClick={toggle} />;
};

export default HeaderSidebarToggle;
