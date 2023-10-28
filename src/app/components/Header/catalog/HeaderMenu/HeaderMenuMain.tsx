"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { MenuButton, MenuGroup, MenuSliderForward } from "@/components/ui/Menu";
import { UserAvatarSkeleton } from "@/components/ui/UserAvatar";

import HeaderMenuForward from "./HeaderMenuForward";

import { useCookies } from "@/hooks/client";

import { COOKIE_IS_AUTH } from "@/constants";

import styles from "../../Header.module.scss";

const HeaderMenuMain: FC = () => {
    const router = useRouter();
    const cookies = useCookies();

    const logout = () => {
        cookies.set(COOKIE_IS_AUTH, false);
        router.refresh();
    };

    const handle = () => {};

    return (
        <>
            <MenuGroup>
                <div className={styles["header__menu-user"]}>
                    <UserAvatarSkeleton diameter="4rem" />

                    <div>
                        <div>Username</div>
                        <div>@UserUniqueID</div>
                    </div>
                </div>
            </MenuGroup>

            <MenuGroup>
                <MenuButton onClick={handle}>Channel</MenuButton>

                <MenuSliderForward name="accounts">
                    <HeaderMenuForward text="Change Account" />
                </MenuSliderForward>

                <MenuButton onClick={logout}>Logout</MenuButton>
            </MenuGroup>

            <MenuGroup>
                <MenuSliderForward name="theme">
                    <HeaderMenuForward text="Theme: Dark" />
                </MenuSliderForward>

                <MenuSliderForward name="language">
                    <HeaderMenuForward text="Language: English" />
                </MenuSliderForward>

                <MenuSliderForward name="security">
                    <HeaderMenuForward text="Security Mode: Disable" />
                </MenuSliderForward>

                <MenuSliderForward name="country">
                    <HeaderMenuForward text="Country: Italy" />
                </MenuSliderForward>
            </MenuGroup>

            <MenuGroup>
                <MenuButton onClick={handle}>Settings</MenuButton>
            </MenuGroup>

            <MenuGroup>
                <MenuButton onClick={handle}>About</MenuButton>
            </MenuGroup>
        </>
    );
};

export default HeaderMenuMain;
