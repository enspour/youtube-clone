import { RefObject, useEffect, useState } from "react";

export const useIsVisibleObserver = (elementRef: RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const callback = (entries: IntersectionObserverEntry[]) => {
            setIsVisible(entries[0].isIntersecting);
        };

        const options = { threshold: 1 };

        const observer = new IntersectionObserver(callback, options);

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, []);

    return isVisible;
};
