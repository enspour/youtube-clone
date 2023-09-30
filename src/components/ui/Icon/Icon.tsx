"use client";

import { CSSProperties, FC, MouseEvent, memo } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColor } from "@/utils";

export interface SvgProps {
    fill: string;
}

interface IconProps {
    svg: FC<SvgProps>;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    cursor?: "pointer" | "auto";
    palette?: ThemePalette;
}

const Icon: FC<IconProps> = ({
    svg: Svg,
    onClick,
    cursor = onClick ? "pointer" : "auto",
    palette = "primary",
}) => {
    const handler = (e: MouseEvent<HTMLElement>) => {
        onClick && onClick(e);
    };

    return (
        <div style={getStyle(cursor)} onClick={handler}>
            <Svg fill={getThemeColor("icon", palette)} />
        </div>
    );
};

const getStyle = (cursor: "pointer" | "auto"): CSSProperties => ({
    display: "contents",
    cursor,
});

export default memo(Icon);
