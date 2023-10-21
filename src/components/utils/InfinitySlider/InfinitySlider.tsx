"use client";

import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    memo,
    useEffect,
    useRef,
} from "react";

import InfinitySliderProvider from "./InfinitySliderProvider";
import InfinitySliderSlide from "./InfinitySliderSlide";

import styles from "./InfinitySlider.module.scss";

interface InfinitySliderProps {
    children: ReactNode[];
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    delay?: number;
}

const InfinitySlider: FC<InfinitySliderProps> = ({
    children,
    index,
    setIndex,
    delay = 300,
}) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const prevIndexRef = useRef(0);

    const slides = [children[children.length - 1], ...children, children[0]];

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const prevIndex = prevIndexRef.current;

        if (Math.abs(index - prevIndex) > 1) {
            slider.style.transition = "0ms";
        } else {
            slider.style.transition = `${delay}ms`;
        }

        if (index === 0) {
            setTimeout(setIndex, delay, slides.length - 2);
        }

        if (index === slides.length - 1) {
            setTimeout(setIndex, delay, 1);
        }

        prevIndexRef.current = index;
    }, [index]);

    return (
        <div ref={sliderRef} className={styles.slider}>
            <InfinitySliderProvider index={index} setIndex={setIndex}>
                {slides.map((slide, index) => (
                    <InfinitySliderSlide key={index}>
                        {slide}
                    </InfinitySliderSlide>
                ))}
            </InfinitySliderProvider>
        </div>
    );
};

export default memo(InfinitySlider);
