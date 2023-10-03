"use client";

import { FC } from "react";

import { Menu, MenuSlider, MenuSliderSlide } from "@/components/ui/Menu";
import { Popper, PopperContent, PopperToggle } from "@/components/ui/Popper";
import { UserAvatarSkeleton } from "@/components/ui/UserAvatar";

import HeaderMenuAccounts from "./HeaderMenu/HeaderMenuAccounts";
import HeaderMenuCountry from "./HeaderMenu/HeaderMenuCountry";
import HeaderMenuLanguage from "./HeaderMenu/HeaderMenuLanguage";
import HeaderMenuMain from "./HeaderMenu/HeaderMenuMain";
import HeaderMenuSecurity from "./HeaderMenu/HeaderMenuSecurity";
import HeaderMenuTheme from "./HeaderMenu/HeaderMenuTheme";

import styles from "../Header.module.scss";

const HeaderMenu: FC = () => {
    return (
        <Popper type="right">
            <PopperToggle>
                <UserAvatarSkeleton diameter="3.2rem" />
            </PopperToggle>

            <PopperContent>
                <div className={styles.header__menu}>
                    <Menu palette="secondary">
                        <MenuSlider>
                            <MenuSliderSlide name="main">
                                <HeaderMenuMain />
                            </MenuSliderSlide>

                            <MenuSliderSlide name="accounts">
                                <HeaderMenuAccounts />
                            </MenuSliderSlide>

                            <MenuSliderSlide name="theme">
                                <HeaderMenuTheme />
                            </MenuSliderSlide>

                            <MenuSliderSlide name="language">
                                <HeaderMenuLanguage />
                            </MenuSliderSlide>

                            <MenuSliderSlide name="security">
                                <HeaderMenuSecurity />
                            </MenuSliderSlide>

                            <MenuSliderSlide name="country">
                                <HeaderMenuCountry />
                            </MenuSliderSlide>
                        </MenuSlider>
                    </Menu>
                </div>
            </PopperContent>
        </Popper>
    );
};

export default HeaderMenu;
