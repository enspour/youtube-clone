"use client";

import { FC, ReactNode } from "react";

import { usePopper } from "./PopperProvider";

import styles from "./Popper.module.scss";

interface PopperToggleProps {
    children: ReactNode;
}

const PopperToggle: FC<PopperToggleProps> = ({ children }) => {
    const { toggle } = usePopper();

    return (
        <div className={styles.toggle} onClick={toggle}>
            {children}
        </div>
    );
};

export default PopperToggle;
