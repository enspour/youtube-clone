import { FC } from "react";

import { Icon } from "@/components/ui/Icon";

import ForwardIcon from "@/assets/icons/header/forward.svg";

import styles from "../../Header.module.scss";

interface HeaderMenuForwardProps {
    text: string;
}

const HeaderMenuForward: FC<HeaderMenuForwardProps> = ({ text }) => {
    return (
        <div className={styles.header__menu__forward}>
            <div>{text}</div>
            <Icon svg={ForwardIcon} />
        </div>
    );
};

export default HeaderMenuForward;
