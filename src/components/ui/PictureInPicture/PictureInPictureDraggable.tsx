"use client";

import { FC, ReactNode, useRef } from "react";

import { useDraggable } from "@/hooks/client";

import styles from "./PictureInPicture.module.scss";

interface PictureInPictureDraggableProps {
    children: ReactNode;
}

const PictureInPictureDraggable: FC<PictureInPictureDraggableProps> = ({
    children,
}) => {
    const draggableRef = useRef(null);

    useDraggable(draggableRef);

    return (
        <div ref={draggableRef} className={styles.draggable}>
            {children}
        </div>
    );
};

export default PictureInPictureDraggable;
