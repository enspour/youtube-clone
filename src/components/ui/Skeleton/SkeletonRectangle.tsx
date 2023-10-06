import { CSSProperties, FC } from "react";

import { PercentUnits, RemUnits, ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./Skeleton.module.scss";

export interface SkeletonRectangleProps {
    type: "rectangle";
    width: RemUnits | PercentUnits;
    height: RemUnits | PercentUnits;
    borderRadius?: RemUnits | PercentUnits;
    palette?: ThemePalette;
}

const SkeletonRectangle: FC<SkeletonRectangleProps> = ({
    width,
    height,
    borderRadius = "0rem",
    palette = "primary",
}) => {
    return (
        <div
            className={styles.skeleton__rectangle}
            style={getStyle(width, height, borderRadius, palette)}
        />
    );
};

const getStyle = (
    width: RemUnits | PercentUnits,
    height: RemUnits | PercentUnits,
    borderRadius: RemUnits | PercentUnits,
    palette: ThemePalette
): CSSProperties => ({
    width,
    height,
    borderRadius,

    ...getThemeColors(["skeleton-bg", "skeleton-shine"], palette),
});

export default SkeletonRectangle;
