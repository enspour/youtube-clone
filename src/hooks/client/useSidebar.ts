import { useIsVideoPage, useMediaQuery } from "@/hooks/client";

import { useSidebarStore } from "@/stores";

export const useSidebar = () => {
    const matches = useMediaQuery("(max-width: 1000px)");

    const isVideoPage = useIsVideoPage();

    const toggleIsOpen = useSidebarStore((state) => state.toggleIsOpen);
    const toggleIsMinimized = useSidebarStore(
        (state) => state.toggleIsMinimized
    );

    const toggle = () => {
        if (matches || isVideoPage) {
            toggleIsOpen();
        } else {
            toggleIsMinimized();
        }
    };

    return { toggle };
};
