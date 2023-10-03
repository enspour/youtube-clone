import { FC } from "react";

import { MenuButton, MenuGroup, MenuSliderBack } from "@/components/ui/Menu";

import HeaderMenuBack from "./HeaderMenuBack";

const HeaderMenuCountry: FC = () => {
    const handle = () => {};

    return (
        <>
            <MenuGroup>
                <MenuSliderBack name="main">
                    <HeaderMenuBack text="Choose a Country" />
                </MenuSliderBack>
            </MenuGroup>

            <MenuGroup>
                <MenuButton onClick={handle}>France</MenuButton>
                <MenuButton onClick={handle}>Italy</MenuButton>
            </MenuGroup>
        </>
    );
};

export default HeaderMenuCountry;
