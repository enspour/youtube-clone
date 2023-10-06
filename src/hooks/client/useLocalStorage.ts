import { useEffect, useState } from "react";

import { localStorage } from "@/utils";

export const useLocalStorage = <T>(name: string, initial: T) => {
    const [value, setValue] = useState<T>(() => {
        const { value } = localStorage.get<T>(name);

        if (typeof value === "undefined") {
            return initial;
        }

        return value;
    });

    const setter = (value: T) => {
        localStorage.set(name, value);
    };

    useEffect(() => {
        const { value, subscribe, unsubscribe } = localStorage.get<T>(name);

        if (value) {
            setValue(value);
        }

        subscribe(setValue);
        return () => unsubscribe();
    }, []);

    return [value, setter] as const;
};
