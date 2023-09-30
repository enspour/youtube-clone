"use client";

import { FC, MouseEvent, ReactNode } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./OutlinedButton.module.scss";

export interface OutlinedButtonProps {
    type: "outlined";
    children: ReactNode | ReactNode[];
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    palette?: ThemePalette;
}

const OutlinedButton: FC<OutlinedButtonProps> = ({
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
    ...getThemeColors(["bg", "bg-hover", "color", "border"], palette),
});

export default OutlinedButton;
