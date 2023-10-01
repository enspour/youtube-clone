import { cookies } from "next/headers";

import { isThemeName } from "@/interfaces";

import { THEME_COOKIE_NAME } from "@/constants";

export const useTheme = () => {
    const cookieStore = cookies();

    const value = cookieStore.get(THEME_COOKIE_NAME)?.value;
    const name = isThemeName(value) ? value : "dark";

    const load = async () => {
        const theme = await import(`@/assets/themes/${name}.json`);
        return theme.default;
    };

    return { name, load };
};
