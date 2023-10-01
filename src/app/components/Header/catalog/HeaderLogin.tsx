"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { Button } from "@/components/ui/Button";

import { useCookies } from "@/hooks/client";

import { IS_AUTH_COOKIE_NAME } from "@/constants";

const HeaderLogin: FC = () => {
    const router = useRouter();
    const cookies = useCookies();

    const login = () => {
        cookies.set(IS_AUTH_COOKIE_NAME, true);
        router.refresh();
    };

    return (
        <Button type="outlined" onClick={login} palette="primary">
            Login
        </Button>
    );
};

export default HeaderLogin;
