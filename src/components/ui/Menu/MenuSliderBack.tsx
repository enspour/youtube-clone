"use client";

import { FC, ReactNode, memo } from "react";

import { MenuButton } from ".";

import { useSlider } from "./MenuSliderProvider";

interface MenuSliderBackProps {
    children: ReactNode;
    name: string;
}

const MenuSliderBack: FC<MenuSliderBackProps> = ({ children, name }) => {
    const { back } = useSlider();

    const clickHandler = () => {
        back(name);
    };

    return <MenuButton onClick={clickHandler}>{children}</MenuButton>;
};

export default memo(MenuSliderBack);
