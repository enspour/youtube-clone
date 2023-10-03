import { FC } from "react";

import { MenuButton, MenuGroup, MenuSliderBack } from "@/components/ui/Menu";

import HeaderMenuBack from "./HeaderMenuBack";

const HeaderMenuLanguage: FC = () => {
    const handle = () => {};

    return (
        <>
            <MenuGroup>
                <MenuSliderBack name="main">
                    <HeaderMenuBack text="Choose a Language" />
                </MenuSliderBack>
            </MenuGroup>

            <MenuGroup>
                <MenuButton onClick={handle}>English</MenuButton>
                <MenuButton onClick={handle}>Italian</MenuButton>
            </MenuGroup>
        </>
    );
};

export default HeaderMenuLanguage;
