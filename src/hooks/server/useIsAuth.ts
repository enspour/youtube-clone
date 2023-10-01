import { cookies } from "next/headers";

import { IS_AUTH_COOKIE_NAME } from "@/constants";

export const useIsAuth = (): boolean => {
    const cookieStore = cookies();
    const value = cookieStore.get(IS_AUTH_COOKIE_NAME)?.value;

    if (value) {
        return JSON.parse(value) as boolean;
    }

    return false;
};
