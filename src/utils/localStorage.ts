export class LocalStorage {
    private events;

    constructor() {
        this.events = new EventTarget();
    }

    get<T>(name: string) {
        const item = localStorage.getItem(name);

        const value = item ? (JSON.parse(item) as T) : undefined;

        let callback: (e: CustomEvent<T>) => void;

        const subscribe = (listener: (value: T) => void) => {
            callback = (e) => {
                const value = e.detail;
                listener(value);
            };

            this.events.addEventListener(name, callback as EventListener);
        };

        const unsubscribe = () => {
            if (!callback) return;
            this.events.removeEventListener(name, callback as EventListener);
        };

        return {
            value,
            subscribe,
            unsubscribe,
        };
    }

    set<T>(name: string, value: T) {
        localStorage.setItem(name, JSON.stringify(value));

        const event = new CustomEvent(name, { detail: value });
        this.events.dispatchEvent(event);
    }
}
