import Link from "next/link";
import { FC } from "react";

import styles from "../Header.module.scss";

const HeaderLogo: FC = () => {
    return (
        <Link href="/">
            <div className={styles.header__logo}>CloneTube</div>
        </Link>
    );
};

export default HeaderLogo;
