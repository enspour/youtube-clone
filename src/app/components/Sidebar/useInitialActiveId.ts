import { usePathname } from "next/navigation";

const useInitialActiveId = () => {
    const pathname = usePathname();

    switch (pathname) {
        case "/":
            return "home";
        case "/subscriptions":
            return "subs";
        case "/library":
            return "library";
        case "/history":
            return "history";
        case "/playlist/wl":
            return "playlist/wl";
        default:
            return "";
    }
};

export default useInitialActiveId;
