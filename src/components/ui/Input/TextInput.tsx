"use client";

import { ChangeEvent, FC, FocusEvent, useState } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./TextInput.module.scss";

export interface TextInputProps {
    type: "text";
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    palette?: ThemePalette;
}

const TextInput: FC<TextInputProps> = ({
    onFocus,
    placeholder,
    palette = "primary",
}) => {
    const [text, setText] = useState("");

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div className={styles.container} style={getStyle(palette)}>
            <input
                className={styles.input}
                placeholder={placeholder}
                value={text}
                onChange={changeHandler}
                onFocus={onFocus}
            />
        </div>
    );
};

const getStyle = (palette: ThemePalette) => ({
    ...getThemeColors(["bg", "bg-extra", "color", "border"], palette),
});

export default TextInput;
