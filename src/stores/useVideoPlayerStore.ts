import { create } from "zustand";

import { Video, getDefaultVideo } from "@/interfaces";

interface State {
    videoElement?: HTMLVideoElement;
    video: Video;
    isMinimized: boolean;
}

interface Action {
    setVideoElement: (videoElement: State["videoElement"]) => void;
    setVideo: (video: State["video"]) => void;
    minimize: () => void;
    maximize: () => void;
}

export const useVideoPlayerStore = create<State & Action>((set) => ({
    setVideoElement: (videoElement) => set(() => ({ videoElement })),

    video: getDefaultVideo(),
    setVideo: (video) => set(() => ({ video })),

    isMinimized: false,
    minimize: () => set(() => ({ isMinimized: true })),
    maximize: () => set(() => ({ isMinimized: false })),
}));
