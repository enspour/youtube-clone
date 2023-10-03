"use client";

import { FC, ReactNode, memo } from "react";

import { MenuButton } from ".";

import { useSlider } from "./MenuSliderProvider";

interface MenuSliderForwardProps {
    children: ReactNode;
    name: string;
}

const MenuSliderForward: FC<MenuSliderForwardProps> = ({ children, name }) => {
    const { forward } = useSlider();

    const clickHandler = () => {
        forward(name);
    };

    return <MenuButton onClick={clickHandler}>{children}</MenuButton>;
};

export default memo(MenuSliderForward);
