import Cookies from "js-cookie";

export const useCookies = () => {
    const get = <T>(name: string): T | null => {
        const value = Cookies.get(name);

        if (!value) return null;

        return JSON.parse(value) as T;
    };

    const set = <T>(name: string, value: T) => {
        Cookies.set(name, JSON.stringify(value));
    };

    return { get, set };
};
