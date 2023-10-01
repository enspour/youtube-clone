import { memo } from "react";

import { withAuth } from "@/components/utils/withAuth";

import SidebarMenuMiniAuth from "./SidebarMenuMiniAuth";
import SidebarMenuMiniUnAuth from "./SidebarMenuMiniUnAuth";

const SidebarMenuMini = withAuth(SidebarMenuMiniAuth, SidebarMenuMiniUnAuth);

export default memo(SidebarMenuMini);
