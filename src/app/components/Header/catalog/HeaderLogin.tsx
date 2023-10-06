"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { Button } from "@/components/ui/Button";

import { useCookies } from "@/hooks/client";

import { COOKIE_IS_AUTH } from "@/constants";

const HeaderLogin: FC = () => {
    const router = useRouter();
    const cookies = useCookies();

    const login = () => {
        cookies.set(COOKIE_IS_AUTH, true);
        router.refresh();
    };

    return (
        <Button type="outlined" onClick={login} palette="primary">
            Login
        </Button>
    );
};

export default HeaderLogin;
