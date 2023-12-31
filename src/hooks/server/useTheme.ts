import { cookies } from "next/headers";

import { isThemeName } from "@/interfaces";

import { COOKIE_DEFAULT_VALUES, COOKIE_THEME_NAME } from "@/constants";

export const useTheme = () => {
    const cookieStore = cookies();

    const value = cookieStore.get(COOKIE_THEME_NAME)?.value;

    const name = isThemeName(value)
        ? value
        : COOKIE_DEFAULT_VALUES[COOKIE_THEME_NAME];

    const fetch = async () => {
        const theme = await import(`@/assets/themes/${name}.json`);
        return theme.default;
    };

    return { name, fetch };
};
