import { FC } from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderNotification from "./HeaderNotification";
import HeaderSearch from "./HeaderSearch";
import HeaderSidebarToggle from "./HeaderSidebarToggle";

import styles from "./Header.module.scss";

const HeaderUser: FC = () => {
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

export default HeaderUser;
