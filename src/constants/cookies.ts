import { CookieKey } from "@/interfaces/cookies.interface";

export const COOKIE_THEME_NAME = "__theme-name";
export const COOKIE_IS_AUTH = "__is-auth";

export const COOKIE_DEFAULT_VALUES: Record<CookieKey, any> = {
    [COOKIE_THEME_NAME]: "dark",
    [COOKIE_IS_AUTH]: false,
};
