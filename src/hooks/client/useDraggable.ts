import { RefObject, useEffect } from "react";

export const useDraggable = (ref: RefObject<HTMLElement>) => {
    const init = () => {
        const element = ref.current;

        if (!element) return;

        let allowDraggable = false;
        let mouseX = 0;
        let mouseY = 0;

        const mousedown = (e: MouseEvent) => {
            e.preventDefault();

            mouseX = e.clientX;
            mouseY = e.clientY;

            allowDraggable = true;
        };

        const mouseup = (e: MouseEvent) => {
            e.preventDefault();

            allowDraggable = false;
        };

        const mouseleave = (e: MouseEvent) => {
            e.preventDefault();

            allowDraggable = false;
        };

        const updateElementPosition = (
            offsetLeft: number,
            offsetTop: number
        ) => {
            const parent = element.parentElement;

            if (!parent) return;

            const parentWidth = parent.offsetWidth;
            const parentHeight = parent.offsetHeight;

            const width = element.offsetWidth;
            const height = element.offsetHeight;

            if (offsetLeft >= 0 && offsetLeft + width <= parentWidth) {
                element.style.left = `${offsetLeft}px`;
            }

            if (offsetTop >= 0 && offsetTop + height <= parentHeight) {
                element.style.top = `${offsetTop}px`;
            }
        };

        const dragging = (e: MouseEvent) => {
            e.preventDefault();

            if (!allowDraggable) return;

            const diffX = e.clientX - mouseX;
            const diffY = e.clientY - mouseY;

            mouseX = e.clientX;
            mouseY = e.clientY;

            const offsetLeft = element.offsetLeft + diffX;
            const offsetTop = element.offsetTop + diffY;

            updateElementPosition(offsetLeft, offsetTop);
        };

        element.addEventListener("mousedown", mousedown);
        element.addEventListener("mousemove", dragging);
        element.addEventListener("mouseup", mouseup);
        element.addEventListener("mouseleave", mouseleave);

        return () => {
            element.removeEventListener("mousedown", mousedown);
            element.removeEventListener("mousemove", dragging);
            element.removeEventListener("mouseup", mouseup);
            element.removeEventListener("mouseleave", mouseleave);
        };
    };

    useEffect(() => {
        return init();
    }, [ref]);
};
