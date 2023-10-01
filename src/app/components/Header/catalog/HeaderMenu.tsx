"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { Menu, MenuButton, MenuGroup } from "@/components/ui/Menu";
import { Popper, PopperContent, PopperToggle } from "@/components/ui/Popper";
import { UserAvatarSkeleton } from "@/components/ui/UserAvatar";

import { useCookies } from "@/hooks/client";

import { IS_AUTH_COOKIE_NAME } from "@/constants";

import styles from "../Header.module.scss";

const HeaderMenu: FC = () => {
    const router = useRouter();
    const cookies = useCookies();

    const logout = () => {
        cookies.set(IS_AUTH_COOKIE_NAME, false);
        router.refresh();
    };

    const empty = () => {};

    return (
        <Popper type="right">
            <PopperToggle>
                <UserAvatarSkeleton diameter="3.2rem" />
            </PopperToggle>

            <PopperContent>
                <div className={styles.header__menu}>
                    <Menu palette="secondary">
                        <MenuGroup>
                            <div className={styles.header__menu__user}>
                                <UserAvatarSkeleton diameter="4rem" />

                                <div>
                                    <div>Username</div>
                                    <div>@UserUniqueID</div>
                                </div>
                            </div>
                        </MenuGroup>

                        <MenuGroup>
                            <MenuButton onClick={empty}>Channel</MenuButton>

                            <MenuButton onClick={empty}>
                                Change Account
                            </MenuButton>

                            <MenuButton onClick={logout}>Logout</MenuButton>
                        </MenuGroup>

                        <MenuGroup>
                            <MenuButton onClick={empty}>Theme: Dark</MenuButton>

                            <MenuButton onClick={empty}>
                                Language: English
                            </MenuButton>

                            <MenuButton onClick={empty}>
                                Security Mode: Disable
                            </MenuButton>

                            <MenuButton onClick={empty}>
                                Country: Unknown
                            </MenuButton>
                        </MenuGroup>

                        <MenuGroup>
                            <MenuButton onClick={empty}>Settings</MenuButton>
                        </MenuGroup>

                        <MenuGroup>
                            <MenuButton onClick={empty}>About</MenuButton>
                        </MenuGroup>
                    </Menu>
                </div>
            </PopperContent>
        </Popper>
    );
};

export default HeaderMenu;
