import { ThemePalette, ThemeProperty } from "@/interfaces";

export const getThemeColor = (
    property: ThemeProperty,
    palette: ThemePalette = "primary"
): string => {
    return `var(--theme-${palette}-${property})`;
};

export const getThemeColors = (
    properties: ThemeProperty[],
    palette: ThemePalette
) => {
    return properties.reduce<any>((acc, property) => {
        acc[`--${property}`] = getThemeColor(property, palette);
        return acc;
    }, {});
};
