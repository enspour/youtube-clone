import { SetStateAction, useEffect, useState } from "react";

import { LOCAL_STORE_DEFAULT_VALUES } from "@/constants";

import { LocalStoreKey } from "@/interfaces";

import { localStore } from "@/utils";

export const useLocalStore = <T>(key: LocalStoreKey) => {
    const [state, setState] = useState<T>(LOCAL_STORE_DEFAULT_VALUES[key]);

    const setter = (value: SetStateAction<T>) => {
        if (value instanceof Function) {
            value = value(state);
        }

        localStore.set(key, value);
    };

    useEffect(() => {
        const { value, subscribe, unsubscribe } = localStore.get<T>(key);

        if (typeof value !== "undefined") {
            setState(value);
        }

        subscribe(setState);
        return () => unsubscribe();
    }, []);

    return [state, setter] as const;
};
