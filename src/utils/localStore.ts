class LocalStore {
    private events;

    constructor() {
        this.events = new EventTarget();
    }

    get<T>(key: string) {
        const item = localStorage.getItem(key);

        const value = item ? (JSON.parse(item) as T) : undefined;

        let callback: (e: CustomEvent<T>) => void;

        const subscribe = (listener: (value: T) => void) => {
            callback = (e) => {
                const value = e.detail;
                listener(value);
            };

            this.events.addEventListener(key, callback as EventListener);
        };

        const unsubscribe = () => {
            if (!callback) return;
            this.events.removeEventListener(key, callback as EventListener);
        };

        return {
            value,
            subscribe,
            unsubscribe,
        };
    }

    set<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));

        const event = new CustomEvent(key, { detail: value });
        this.events.dispatchEvent(event);
    }
}

export const localStore = new LocalStore();
