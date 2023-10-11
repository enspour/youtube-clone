"use client";

import { ChangeEvent, FC, FocusEvent, MouseEvent } from "react";

import { Icon } from "../../Icon";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import SearchIcon from "@/assets/icons/input/search.svg";

import styles from "./SearchInput.module.scss";

export interface SearchInputProps {
    type: "search";
    text: string;
    setText: (text: string) => void;
    onSearch: (e: MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    palette?: ThemePalette;
}

const SearchInput: FC<SearchInputProps> = ({
    text,
    setText,
    onSearch,
    onFocus,
    placeholder,
    palette = "primary",
}) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        onSearch(e);
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
