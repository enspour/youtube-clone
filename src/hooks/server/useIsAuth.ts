import { cookies } from "next/headers";

import { COOKIE_IS_AUTH } from "@/constants";

export const useIsAuth = (): boolean => {
    const cookieStore = cookies();
    const value = cookieStore.get(COOKIE_IS_AUTH)?.value;

    if (value) {
        return JSON.parse(value) as boolean;
    }

    return false;
};
