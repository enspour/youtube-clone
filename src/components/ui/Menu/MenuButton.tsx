"use client";

import { FC, MouseEvent, ReactNode, memo } from "react";

import styles from "./Menu.module.scss";

interface MenuButtonProps {
    children: ReactNode;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const MenuButton: FC<MenuButtonProps> = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default memo(MenuButton);
