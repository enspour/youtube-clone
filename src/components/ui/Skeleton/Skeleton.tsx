import { CSSProperties, FC, memo } from "react";

import { ThemePalette } from "@/interfaces";

import { getThemeColors } from "@/utils";
import styles from "./Skeleton.module.scss";

interface SkeletonRectangleProps {
    type: "rectangle";
    width: string;
    height: string;
    borderRadius?: string;
}

interface SkeletonCircleProps {
    type: "circle";
    diameter: string;
}

interface SkeletonTextProps {
    type: "text";
    width: string;
    fontSize: string;
}

type SkeletonProps = { palette?: ThemePalette } & (
    | SkeletonRectangleProps
    | SkeletonCircleProps
    | SkeletonTextProps
);

const Skeleton: FC<SkeletonProps> = (props) => {
    const { type, palette = "primary" } = props;

    if (type === "rectangle") {
        const { width, height, borderRadius } = props;

        return (
            <div
                className={styles.skeleton__rectangle}
                style={getStyle(width, height, palette, borderRadius)}
            ></div>
        );
    }

    if (type === "circle") {
        const { diameter } = props;

        return (
            <div
                className={styles.skeleton__circle}
                style={getStyle(diameter, diameter, palette)}
            ></div>
        );
    }

    if (type === "text") {
        const { width, fontSize } = props;

        return (
            <div
                className={styles.skeleton__text}
                style={getStyle(width, fontSize, palette)}
            ></div>
        );
    }

    throw new Error(`Unavailable this type (${type}) of skeleton`);
};

const getStyle = (
    width: string,
    height: string,
    palette: ThemePalette,
    borderRadius?: string
): CSSProperties => ({
    width,
    height,
    borderRadius,

    ...getThemeColors(["skeleton-bg", "skeleton-shine"], palette),
});

export default memo(Skeleton);
