"use client";

import { ChangeEvent, FC, FocusEvent, MouseEvent, useState } from "react";

import { Icon } from "../../Icon";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import SearchIcon from "@/assets/icons/input/search.svg";

import styles from "./SearchInput.module.scss";

export interface SearchInputProps {
    type: "search";
    onSearch: (text: string, e: MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    palette?: ThemePalette;
}

const SearchInput: FC<SearchInputProps> = ({
    onSearch,
    onFocus,
    placeholder,
    palette = "primary",
}) => {
    const [text, setText] = useState("");

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        onSearch(text, e);
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

            <button className={styles.button} onClick={clickHandler}>
                <Icon svg={SearchIcon} cursor="pointer" palette={palette} />
            </button>
        </div>
    );
};

const getStyle = (palette: ThemePalette) => ({
    ...getThemeColors(["bg", "bg-extra", "color", "border"], palette),
});

export default SearchInput;
