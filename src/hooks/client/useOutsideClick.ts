import { DependencyList, RefObject, useEffect } from "react";

export const useOutsideClick = (
    ref: RefObject<HTMLDivElement>,
    click: () => void,
    deps: DependencyList = []
) => {
    const handle = (e: MouseEvent) => {
        const element = ref.current;

        if (element && !element.contains(e.target as Node)) {
            click();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handle);
        return () => {
            document.removeEventListener("click", handle);
        };
    }, deps);
};
