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

import { RemUnits } from "@/interfaces";

interface PopperContext {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

const initialPopperContext: PopperContext = {
    isOpen: false,
    open: () => {},
    close: () => {},
    toggle: () => {},
};

const Popper = createContext<PopperContext>(initialPopperContext);

export type PopperStyleType = "left" | "right" | "center";
export type PopperStyleGap = RemUnits;

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

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    useOutsideClick(popperRef, () => setIsOpen(false), [isOpen]);

    return (
        <Popper.Provider value={{ isOpen, open, close, toggle }}>
            <PopperStyle.Provider value={{ type, gap }}>
                {children}
            </PopperStyle.Provider>
        </Popper.Provider>
    );
};

export const usePopper = () => {
    const { isOpen, open, close, toggle } = useContext(Popper);
    return { isOpen, open, close, toggle };
};

export const usePopperStyle = () => {
    const { type, gap } = useContext(PopperStyle);
    return { type, gap };
};

export default PopperProvider;
