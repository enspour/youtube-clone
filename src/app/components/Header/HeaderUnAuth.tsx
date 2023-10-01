import { FC } from "react";

import HeaderLogin from "./catalog/HeaderLogin";
import HeaderLogo from "./catalog/HeaderLogo";
import HeaderSearch from "./catalog/HeaderSearch";
import HeaderSidebarToggle from "./catalog/HeaderSidebarToggle";

import styles from "./Header.module.scss";

const HeaderUnAuth: FC = () => {
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

export default HeaderUnAuth;
