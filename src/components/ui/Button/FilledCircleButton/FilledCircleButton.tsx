"use client";

import { FC, MouseEvent, ReactNode } from "react";

import { RemUnits, ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./FilledCircleButton.module.scss";

export interface FilledCircleButtonProps {
    type: "filled circle";
    children: ReactNode | ReactNode[];
    diameter?: RemUnits;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    palette?: ThemePalette;
}

const FilledCircleButton: FC<FilledCircleButtonProps> = ({
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

const getStyle = (diameter: RemUnits, palette: ThemePalette) => ({
    width: diameter,
    height: diameter,
    ...getThemeColors(["bg", "bg-hover", "color"], palette),
});

export default FilledCircleButton;
