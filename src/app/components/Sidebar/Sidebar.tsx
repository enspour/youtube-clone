import { FC, memo } from "react";

import SidebarMenu from "./Menu/SidebarMenu";
import SidebarMenuMini from "./MenuMini/SidebarMenuMini";
import SidebarContainer from "./SidebarContainer";

const Sidebar: FC = () => {
    return (
        <SidebarContainer
            normal={<SidebarMenu />}
            minimized={<SidebarMenuMini />}
        />
    );
};

export default memo(Sidebar);
