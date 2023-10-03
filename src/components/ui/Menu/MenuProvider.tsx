"use client";

import { usePathname } from "next/navigation";
import { FC, ReactNode, createContext, useContext } from "react";

interface ActiveLinkContext {
    activePathname: string;
}

const initialActiveLink: ActiveLinkContext = {
    activePathname: "",
};

const ActiveLink = createContext<ActiveLinkContext>(initialActiveLink);

interface MenuProviderProps {
    children: ReactNode;
}

const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
    const pathname = usePathname();

    return (
        <ActiveLink.Provider value={{ activePathname: pathname }}>
            {children}
        </ActiveLink.Provider>
    );
};

export const useActiveLink = () => {
    const { activePathname } = useContext(ActiveLink);
    return { activePathname };
};

export default MenuProvider;
