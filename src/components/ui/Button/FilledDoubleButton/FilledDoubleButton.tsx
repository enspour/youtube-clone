import { FC, MouseEvent, ReactNode } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./FilledDoubleButton.module.scss";

export interface FilledDoubleButtonProps {
    type: "filled double";
    renderLeft: () => ReactNode;
    renderRight: () => ReactNode;
    onClickLeft?: (e: MouseEvent<HTMLButtonElement>) => void;
    onClickRight?: (e: MouseEvent<HTMLButtonElement>) => void;
    palette?: ThemePalette;
}

const FilledDoubleButton: FC<FilledDoubleButtonProps> = ({
    renderLeft,
    renderRight,
    onClickLeft,
    onClickRight,
    palette = "primary",
}) => {
    return (
        <div className={styles.button} style={getStyle(palette)}>
            <button onClick={onClickLeft}>{renderLeft()}</button>

            <div className={styles.line}></div>

            <button onClick={onClickRight}>{renderRight()}</button>
        </div>
    );
};

const getStyle = (palette: ThemePalette) => ({
    ...getThemeColors(["bg", "bg-hover", "color", "border"], palette),
});

export default FilledDoubleButton;
