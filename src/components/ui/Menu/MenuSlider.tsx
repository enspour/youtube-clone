import { Children, FC, ReactNode, isValidElement, memo } from "react";

import MenuSliderProvider, { Slides } from "./MenuSliderProvider";
import MenuSliderSlides from "./MenuSliderSlides";

interface MenuSliderProps {
    children: ReactNode[];
}

const MenuSlider: FC<MenuSliderProps> = ({ children }) => {
    const slides: Slides = [];

    Children.forEach(children, (element) => {
        if (!isValidElement(element)) return;

        const { name } = element.props;

        const slide = {
            name,
            element,
        };

        slides.push(slide);
    });

    return (
        <MenuSliderProvider initialSlides={slides}>
            <MenuSliderSlides />
        </MenuSliderProvider>
    );
};

export default memo(MenuSlider);
