import { ChangeEvent, FC, FocusEvent } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./TextInput.module.scss";

export interface TextInputProps {
    type: "text";
    text: string;
    setText: (text: string) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    palette?: ThemePalette;
}

const TextInput: FC<TextInputProps> = ({
    text,
    setText,
    onFocus,
    placeholder,
    palette = "primary",
}) => {
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
