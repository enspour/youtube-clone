"use client";

import {
    ChangeEvent,
    DetailedHTMLProps,
    FC,
    InputHTMLAttributes,
    useEffect,
    useRef,
} from "react";

import { classes, getThemeColors } from "@/utils";

import { ThemePalette } from "@/interfaces";

import styles from "./TrackInput.module.scss";

export interface TrackInputProps
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    type: "track";
    value: number;
    setValue: (value: number) => void;
    max: number;
    min: number;
    palette?: ThemePalette;
}

const TrackInput: FC<TrackInputProps> = ({
    type,
    className,
    value,
    setValue,
    max,
    min,
    palette = "primary",
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(e.target.value));
    };

    useEffect(() => {
        const input = inputRef.current;

        if (!input) return;

        const percent = `${((value - min) * 100) / (max - min)}%`;

        input.style.setProperty("--percent", percent);
    }, [value, max, min]);

    return (
        <input
            ref={inputRef}
            type="range"
            className={classes(styles.input, className)}
            value={value}
            onChange={changeHandler}
            max={max}
            min={min}
            style={getStyle(palette)}
            {...props}
        />
    );
};

const getStyle = (palette: ThemePalette) => ({
    ...getThemeColors(["track-bg", "track-color"], palette),
});

export default TrackInput;
