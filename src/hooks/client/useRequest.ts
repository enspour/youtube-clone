import { use } from "./use";

const cache = new Map();

export const useRequest = <TArgs extends any[], TResult>(
    name: string,
    request: (...args: TArgs) => Promise<TResult>,
    args: TArgs
): TResult => {
    const run = (): Promise<TResult> => {
        const key = name + JSON.stringify(args);

        if (!cache.has(key)) {
            cache.set(key, request(...args));
        }

        return cache.get(key);
    };

    return use(run());
};
