import { FC } from "react";

import HeaderLogo from "./catalog/HeaderLogo";
import HeaderMenu from "./catalog/HeaderMenu";
import HeaderNotification from "./catalog/HeaderNotification";
import HeaderSearch from "./catalog/HeaderSearch";
import HeaderSidebarToggle from "./catalog/HeaderSidebarToggle";

import styles from "./Header.module.scss";

const HeaderAuth: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__start}>
                <HeaderSidebarToggle />
                <HeaderLogo />
            </div>

            <div className={styles.header__center}>
                <HeaderSearch />
            </div>

            <div className={styles.header__end}>
                <HeaderNotification />
                <HeaderMenu />
            </div>
        </div>
    );
};

export default HeaderAuth;
