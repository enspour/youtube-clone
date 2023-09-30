import { create } from "zustand";

interface State {
    isOpen: boolean;
    isMinimized: boolean;
}

interface Action {
    open: () => void;
    close: () => void;
    toggleIsOpen: () => void;
    minimize: () => void;
    maximize: () => void;
    toggleIsMinimized: () => void;
}

export const useSidebarStore = create<State & Action>((set) => ({
    isOpen: false,
    open: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),

    isMinimized: false,
    minimize: () => set(() => ({ isMinimized: true })),
    maximize: () => set(() => ({ isMinimized: false })),
    toggleIsMinimized: () =>
        set((state) => ({ isMinimized: !state.isMinimized })),
}));
