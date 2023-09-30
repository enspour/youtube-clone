import { usePathname } from "next/navigation";

export const useIsVideoPage = () => {
    const pathname = usePathname();
    return pathname.startsWith("/watch/");
};
