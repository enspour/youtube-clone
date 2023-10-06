import { CSSProperties, FC } from "react";

import { PercentUnits, RemUnits, ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./Skeleton.module.scss";

export interface SkeletonTextProps {
    type: "text";
    width: RemUnits | PercentUnits;
    fontSize: RemUnits;
    palette?: ThemePalette;
}

const SkeletonText: FC<SkeletonTextProps> = ({
    width,
    fontSize,
    palette = "primary",
}) => {
    return (
        <div
            className={styles.skeleton__text}
            style={getStyle(width, fontSize, palette)}
        />
    );
};

const getStyle = (
    width: RemUnits | PercentUnits,
    fontSize: RemUnits,
    palette: ThemePalette
): CSSProperties => ({
    width,
    height: fontSize,

    ...getThemeColors(["skeleton-bg", "skeleton-shine"], palette),
});

export default SkeletonText;
