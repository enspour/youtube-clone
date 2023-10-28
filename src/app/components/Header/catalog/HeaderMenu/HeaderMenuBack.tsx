"use client";

import { FC } from "react";

import { Icon } from "@/components/ui/Icon";

import BackIcon from "@/assets/icons/header/back.svg";

import styles from "../../Header.module.scss";

interface HeaderMenuBackProps {
    text: string;
}

const HeaderMenuBack: FC<HeaderMenuBackProps> = ({ text }) => {
    return (
        <div className={styles["header__menu-back"]}>
            <Icon svg={BackIcon} />
            <span>{text}</span>
        </div>
    );
};

export default HeaderMenuBack;
