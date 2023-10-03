import { FC, ReactNode, memo } from "react";

import MenuProvider from "./MenuProvider";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./Menu.module.scss";

interface MenuProps {
    children: ReactNode | ReactNode[];
    palette?: ThemePalette;
}

const Menu: FC<MenuProps> = ({ children, palette = "primary" }) => {
    return (
        <MenuProvider>
            <div className={styles.menu} style={getStyle(palette)}>
                {children}
            </div>
        </MenuProvider>
    );
};

const getStyle = (palette: ThemePalette) => ({
    ...getThemeColors(["bg", "bg-hover", "color", "border"], palette),
});

export default memo(Menu);
