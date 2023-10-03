import { FC } from "react";

import { MenuButton, MenuGroup, MenuSliderBack } from "@/components/ui/Menu";

import HeaderMenuBack from "./HeaderMenuBack";

const HeaderMenuTheme: FC = () => {
    const handle = () => {};

    return (
        <>
            <MenuGroup>
                <MenuSliderBack name="main">
                    <HeaderMenuBack text="Choose a Theme" />
                </MenuSliderBack>
            </MenuGroup>

            <MenuGroup>
                <MenuButton onClick={handle}>Dark</MenuButton>
                <MenuButton onClick={handle}>Light</MenuButton>
            </MenuGroup>
        </>
    );
};

export default HeaderMenuTheme;
