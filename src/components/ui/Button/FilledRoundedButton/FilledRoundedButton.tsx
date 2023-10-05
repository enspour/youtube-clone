"use client";

import { FC, MouseEvent, ReactNode } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./FilledRoundedButton.module.scss";

export interface FilledRoundedButtonProps {
    type: "filled rounded";
    children: ReactNode | ReactNode[];
    diameter?: `${number}rem`;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    palette?: ThemePalette;
}

const FilledRoundedButton: FC<FilledRoundedButtonProps> = ({
    children,
    diameter = "3.6rem",
    onClick,
    palette = "primary",
}) => {
    return (
        <button
            className={styles.button}
            style={getStyle(diameter, palette)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const getStyle = (diameter: `${number}rem`, palette: ThemePalette) => ({
    width: diameter,
    height: diameter,
    ...getThemeColors(["bg", "bg-hover", "color"], palette),
});

export default FilledRoundedButton;
