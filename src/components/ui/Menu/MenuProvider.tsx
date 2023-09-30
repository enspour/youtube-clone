"use client";

import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface ActiveMenuContext {
    activeId: string;
    setActiveId: (id: string) => void;
}

const initialActiveMenu: ActiveMenuContext = {
    activeId: "",
    setActiveId: () => {},
};

const ActiveMenu = createContext<ActiveMenuContext>(initialActiveMenu);

interface MenuProviderProps {
    children: ReactNode;
    initialActiveId?: string;
}

const MenuProvider: FC<MenuProviderProps> = ({
    children,
    initialActiveId = "",
}) => {
    const [activeId, setActiveId] = useState<string>(initialActiveId);

    useEffect(() => {
        setActiveId(initialActiveId);
    }, [initialActiveId]);

    return (
        <ActiveMenu.Provider value={{ activeId, setActiveId }}>
            {children}
        </ActiveMenu.Provider>
    );
};

export const useActiveMenu = () => {
    const { activeId, setActiveId } = useContext(ActiveMenu);
    return [activeId, setActiveId] as const;
};

export default MenuProvider;
