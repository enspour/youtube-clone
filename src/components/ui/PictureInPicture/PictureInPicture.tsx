import { FC, ReactNode, memo } from "react";

import PictureInPictureDraggable from "./PictureInPictureDraggable";

import styles from "./PictureInPicture.module.scss";

interface PictureInPictureProps {
    children: ReactNode;
    isOpen: boolean;
}

const PictureInPicture: FC<PictureInPictureProps> = ({ children, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <PictureInPictureDraggable>
                    {children}
                </PictureInPictureDraggable>
            </div>
        </div>
    );
};

export default memo(PictureInPicture);
