import { cookies } from "next/headers";

import { isThemeName } from "@/interfaces";

export const useTheme = () => {
    const cookieStore = cookies();

    const value = cookieStore.get("__theme-name")?.value;
    const name = isThemeName(value) ? value : "dark";

    const load = async () => {
        const theme = await import(`@/assets/themes/${name}.json`);
        return theme.default;
    };

    return { name, load };
};
