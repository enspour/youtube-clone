"use client";

import {
    FC,
    ReactNode,
    RefObject,
    createContext,
    useContext,
    useState,
} from "react";

import { useOutsideClick } from "@/hooks/client";

interface PopperContext {
    isOpen: boolean;
    toggle: () => void;
}

const initialPopperContext: PopperContext = {
    isOpen: false,
    toggle: () => {},
};

const Popper = createContext<PopperContext>(initialPopperContext);

export type PopperStyleType = "left" | "right" | "center";
export type PopperStyleGap = `${number}rem`;

interface PopperStyleContext {
    type: PopperStyleType;
    gap: PopperStyleGap;
}

const initialPopperStyleContext: PopperStyleContext = {
    type: "left",
    gap: "1rem",
};

const PopperStyle = createContext<PopperStyleContext>(
    initialPopperStyleContext
);

interface PopperProviderProps {
    children: ReactNode;
    popperRef: RefObject<HTMLDivElement>;
    type: PopperStyleType;
    gap: PopperStyleGap;
}

const PopperProvider: FC<PopperProviderProps> = ({
    children,
    popperRef,
    type,
    gap,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);

    useOutsideClick(popperRef, () => setIsOpen(false), [isOpen]);

    return (
        <Popper.Provider value={{ isOpen, toggle }}>
            <PopperStyle.Provider value={{ type, gap }}>
                {children}
            </PopperStyle.Provider>
        </Popper.Provider>
    );
};

export const usePopper = () => {
    const { isOpen, toggle } = useContext(Popper);
    return { isOpen, toggle };
};

export const usePopperStyle = () => {
    const { type, gap } = useContext(PopperStyle);
    return { type, gap };
};

export default PopperProvider;
