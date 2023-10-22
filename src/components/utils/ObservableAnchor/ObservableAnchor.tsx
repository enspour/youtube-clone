"use client";

import { FC, memo, useEffect, useRef } from "react";

import { useIsVisibleObserver } from "@/hooks/client";

import styles from "./ObservableAnchor.module.scss";

interface ObservableAnchorProps {
    onVisible?: () => void;
}

const ObservableAnchor: FC<ObservableAnchorProps> = ({ onVisible }) => {
    const anchorRef = useRef<HTMLDivElement>(null);

    const isVisible = useIsVisibleObserver(anchorRef);

    useEffect(() => {
        if (isVisible) {
            onVisible && onVisible();
        }
    }, [isVisible]);

    return <div ref={anchorRef} className={styles.anchor}></div>;
};

export default memo(ObservableAnchor);
