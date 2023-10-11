import { LocalStoreKey } from "@/interfaces/localStore.interface";

export const LOCAL_STORE_PLAYER_VOLUME = "__player-volume";

export const LOCAL_STORE_DEFAULT_VALUES: Record<LocalStoreKey, any> = {
    [LOCAL_STORE_PLAYER_VOLUME]: 0.2,
};
