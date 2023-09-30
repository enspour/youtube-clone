import { create } from "zustand";

interface State {}

interface Action {}

export const useUserStore = create<State & Action>((set) => ({}));
