"use client";

import { CSSProperties, FC, ReactNode } from "react";

import {
    PopperStyleGap,
    PopperStyleType,
    usePopper,
    usePopperStyle,
} from "./PopperProvider";

import styles from "./Popper.module.scss";

interface PopperContentProps {
    children: ReactNode;
}

const PopperContent: FC<PopperContentProps> = ({ children }) => {
    const { isOpen } = usePopper();
    const { type, gap } = usePopperStyle();

    if (!isOpen) return null;

    return (
        <div className={styles.content} style={getStyle(type, gap)}>
            {children}
        </div>
    );
};

const getStyle = (type: PopperStyleType, gap: PopperStyleGap) => {
    let style: CSSProperties = { top: `calc(100% + ${gap})` };

    switch (type) {
        case "center":
            style = { ...style, left: "50%", transform: "translateX(-50%)" };
        case "left":
            style = { ...style, left: 0 };
        case "right":
            style = { ...style, right: 0 };
    }

    return style;
};

export default PopperContent;
