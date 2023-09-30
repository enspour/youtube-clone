export const themeNames = ["light", "dark"] as const;

export type ThemeName = (typeof themeNames)[number];

export const isThemeName = (name: unknown): name is ThemeName => {
    if (typeof name === "string" && themeNames.includes(name as ThemeName)) {
        return true;
    }

    return false;
};

export const themePalettes = ["primary", "secondary"] as const;

export type ThemePalette = (typeof themePalettes)[number];

export const themeProperties = [
    "bg",
    "bg-extra",
    "bg-hover",
    "color",
    "color-extra",
    "border",
    "skeleton-bg",
    "skeleton-shine",
    "icon",
] as const;

export type ThemeProperty = (typeof themeProperties)[number];
