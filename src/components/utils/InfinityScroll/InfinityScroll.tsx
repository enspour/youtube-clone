"use client";

import { FC, ReactNode, useEffect, useRef } from "react";

interface InfinityScrollProps {
    children: ReactNode | ReactNode[];
    fetchData: () => void;
}

const InfinityScroll: FC<InfinityScrollProps> = ({ children, fetchData }) => {
    const target = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = target.current;

        if (!element) return;

        const callback = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                fetchData();
            }
        };

        const options = { threshold: 1 };

        const observer = new IntersectionObserver(callback, options);

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <>
            {children}
            <div ref={target}></div>
        </>
    );
};

export default InfinityScroll;
