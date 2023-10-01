import { memo } from "react";

import { withAuth } from "@/components/utils/withAuth";

import SidebarMenuAuth from "./SidebarMenuAuth";
import SidebarMenuUnAuth from "./SidebarMenuUnAuth";

const SidebarMenu = withAuth(SidebarMenuAuth, SidebarMenuUnAuth);

export default memo(SidebarMenu);
