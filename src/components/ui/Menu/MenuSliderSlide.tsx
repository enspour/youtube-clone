import { FC, ReactNode, memo } from "react";

interface MenuSliderSlideProps {
    children: ReactNode;
    name: string;
}

const MenuSliderSlide: FC<MenuSliderSlideProps> = ({ children }) => {
    return <>{children}</>;
};

export default memo(MenuSliderSlide);
