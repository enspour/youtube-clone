import { FC } from "react";

import HeaderLogin from "./HeaderLogin";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderSidebarToggle from "./HeaderSidebarToggle";

import styles from "./Header.module.scss";

const HeaderGuest: FC = () => {
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
                <HeaderLogin />
            </div>
        </div>
    );
};

export default HeaderGuest;
