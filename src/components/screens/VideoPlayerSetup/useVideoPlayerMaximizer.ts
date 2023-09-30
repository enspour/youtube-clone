import { useEffect } from "react";

import { useIsVideoPage } from "@/hooks/client";

import { useVideoPlayerStore } from "@/stores";

export const useVideoPlayerMaximizer = () => {
    const isVideoPage = useIsVideoPage();

    const maximize = useVideoPlayerStore((state) => state.maximize);

    useEffect(() => {
        if (isVideoPage) {
            maximize();
        }
    }, [isVideoPage]);
};
