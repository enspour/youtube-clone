"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { UserAvatarSkeleton } from "@/components/ui/UserAvatar";

import { useCookies } from "@/hooks/client";

import { IS_AUTH_COOKIE_NAME } from "@/constants";

const HeaderMenu: FC = () => {
    const router = useRouter();
    const cookies = useCookies();

    const logout = () => {
        cookies.set(IS_AUTH_COOKIE_NAME, false);
        router.refresh();
    };

    return (
        <div onClick={logout}>
            <UserAvatarSkeleton diameter="3.2rem" />
        </div>
    );
};

export default HeaderMenu;
