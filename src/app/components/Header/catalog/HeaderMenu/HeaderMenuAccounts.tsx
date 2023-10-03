import { FC } from "react";

import { MenuButton, MenuGroup, MenuSliderBack } from "@/components/ui/Menu";

import HeaderMenuBack from "./HeaderMenuBack";

const HeaderMenuCountry: FC = () => {
    const handle = () => {};

    return (
        <>
            <MenuGroup>
                <MenuSliderBack name="main">
                    <HeaderMenuBack text="Accounts" />
                </MenuSliderBack>
            </MenuGroup>

            <MenuGroup title="Current Account">
                <MenuButton onClick={handle}>User</MenuButton>
            </MenuGroup>

            <MenuGroup title="Another Accounts">
                <MenuButton onClick={handle}>User1</MenuButton>
                <MenuButton onClick={handle}>User2</MenuButton>
            </MenuGroup>
        </>
    );
};

export default HeaderMenuCountry;
