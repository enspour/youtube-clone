import { FC } from "react";

import { MenuGroup, MenuSliderBack } from "@/components/ui/Menu";

import HeaderMenuBack from "./HeaderMenuBack";

const HeaderMenuSecurity: FC = () => {
    return (
        <>
            <MenuGroup>
                <MenuSliderBack name="main">
                    <HeaderMenuBack text="Choose a Security Mode" />
                </MenuSliderBack>
            </MenuGroup>
        </>
    );
};

export default HeaderMenuSecurity;
