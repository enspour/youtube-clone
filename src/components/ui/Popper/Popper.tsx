"use client";

import { FC, ReactNode, useRef } from "react";

import PopperProvider, {
    PopperStyleGap,
    PopperStyleType,
} from "./PopperProvider";

import styles from "./Popper.module.scss";

interface PopperProps {
    children: [ReactNode, ReactNode];
    type?: PopperStyleType;
    gap?: PopperStyleGap;
}

const Popper: FC<PopperProps> = ({ children, type = "left", gap = "1rem" }) => {
    const popperRef = useRef(null);

    return (
        <PopperProvider popperRef={popperRef} type={type} gap={gap}>
            <div ref={popperRef} className={styles.popper}>
                {children}
            </div>
        </PopperProvider>
    );
};

export default Popper;
