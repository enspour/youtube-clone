"use client";

import { FC, MouseEvent, ReactNode } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./FilledButton.module.scss";

export interface FilledButtonProps {
    type: "filled";
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    palette?: ThemePalette;
}

const FilledButton: FC<FilledButtonProps> = ({
    children,
    onClick,
    palette = "primary",
}) => {
    return (
        <button
            className={styles.button}
            style={getStyle(palette)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const getStyle = (palette: ThemePalette) => ({
    ...getThemeColors(["bg", "bg-hover", "color"], palette),
});

export default FilledButton;
