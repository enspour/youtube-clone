import { create } from "zustand";

import { Video, getDefaultVideo } from "@/interfaces";

interface State {
    videoElement?: HTMLVideoElement;
    video: Video;
    isPlaying: boolean;
    time: number;
    duration: number;
    isMinimized: boolean;
    isFullscreen: boolean;
}

interface Action {
    setVideoElement: (videoElement: State["videoElement"]) => void;
    setVideo: (video: State["video"]) => void;

    setIsPlaying: (isPlaying: State["isPlaying"]) => void;
    play: () => void;
    pause: () => void;
    togglePlayPause: () => void;

    setManuallyTime: (time: State["time"]) => void;
    setTime: (time: State["time"]) => void;

    setDuration: (duration: State["duration"]) => void;

    minimize: () => void;
    maximize: () => void;

    setIsFullscreen: (isFullscreen: State["isFullscreen"]) => void;
}

export const useVideoPlayerStore = create<State & Action>((set, get) => {
    return {
        setVideoElement: (videoElement) => set(() => ({ videoElement })),

        video: getDefaultVideo(),
        setVideo: (video) => set(() => ({ video })),

        isPlaying: false,
        setIsPlaying: (isPlaying) => set(() => ({ isPlaying })),

        play: () => {
            const { videoElement } = get();
            videoElement && videoElement.play();
        },

        pause: () => {
            const { videoElement } = get();
            videoElement && videoElement.pause();
        },

        togglePlayPause: () => {
            const { isPlaying, play, pause } = get();
            isPlaying ? pause() : play();
        },

        time: 0,
        setManuallyTime: (time) => set(() => ({ time: time })),
        setTime: (time) => {
            const { videoElement } = get();
            videoElement && (videoElement.currentTime = time);
        },

        duration: 0,
        setDuration: (duration) => set(() => ({ duration })),

        isMinimized: false,
        minimize: () => set(() => ({ isMinimized: true })),
        maximize: () => set(() => ({ isMinimized: false })),

        isFullscreen: false,
        setIsFullscreen: (isFullscreen) => set(() => ({ isFullscreen })),
    };
});
