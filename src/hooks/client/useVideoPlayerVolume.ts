import { useLocalStore } from ".";

import { LOCAL_STORE_PLAYER_VOLUME } from "@/constants";

export const useVideoPlayerVolume = () => {
    return useLocalStore<number>(LOCAL_STORE_PLAYER_VOLUME);
};
