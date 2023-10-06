import { CSSProperties, FC } from "react";

import { PercentUnits, RemUnits, ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";

import styles from "./Skeleton.module.scss";

export interface SkeletonCircleProps {
    type: "circle";
    diameter: RemUnits | PercentUnits;
    palette?: ThemePalette;
}

const SkeletonCircle: FC<SkeletonCircleProps> = ({
    diameter,
    palette = "primary",
}) => {
    return (
        <div
            className={styles.skeleton__circle}
            style={getStyle(diameter, palette)}
        ></div>
    );
};

const getStyle = (
    diameter: RemUnits | PercentUnits,
    palette: ThemePalette
): CSSProperties => ({
    width: diameter,
    height: diameter,

    ...getThemeColors(["skeleton-bg", "skeleton-shine"], palette),
});

export default SkeletonCircle;
