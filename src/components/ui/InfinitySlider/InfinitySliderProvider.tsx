"use client";

import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
} from "react";

interface CurrentIndexContext {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

const initialCurrentIndex: CurrentIndexContext = {
    index: 0,
    setIndex: () => {},
};

const CurrentIndex = createContext<CurrentIndexContext>(initialCurrentIndex);

interface InfinitySliderProviderProps {
    children: ReactNode[];
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

const InfinitySliderProvider: FC<InfinitySliderProviderProps> = ({
    children,
    index,
    setIndex,
}) => {
    return (
        <CurrentIndex.Provider value={{ index, setIndex }}>
            {children}
        </CurrentIndex.Provider>
    );
};

export const useIndex = () => {
    const { index, setIndex } = useContext(CurrentIndex);
    return { index, setIndex };
};

export default InfinitySliderProvider;
