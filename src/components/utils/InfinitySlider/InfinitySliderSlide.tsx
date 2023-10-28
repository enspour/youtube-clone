"use client";

import { CSSProperties, FC, ReactNode, memo } from "react";

import { useIndex } from "./InfinitySliderProvider";

import styles from "./InfinitySlider.module.scss";

interface InfinitySliderSlideProps {
    children: ReactNode;
}

const InfinitySliderSlide: FC<InfinitySliderSlideProps> = ({ children }) => {
    const { index } = useIndex();

    return (
        <div className={styles.slider__slide} style={getStyle(index)}>
            {children}
        </div>
    );
};

const getStyle = (index: number): CSSProperties => ({
    transform: `translateX(-${index * 100}%)`,
});

export default memo(InfinitySliderSlide);
