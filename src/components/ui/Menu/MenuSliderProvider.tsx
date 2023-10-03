"use client";

import {
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

export type Slides = { name: string; element: ReactNode }[];
export type PreparedSlides = [ReactNode, ReactNode, ReactNode];

interface SlidesContext {
    slides: Slides;
}

const initialSlides: SlidesContext = {
    slides: [],
};

const Slides = createContext<SlidesContext>(initialSlides);

export interface IndexContext {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

const initialIndex: IndexContext = {
    index: 1,
    setIndex: () => {},
};

const Index = createContext<IndexContext>(initialIndex);

interface PreparedSlidesContext {
    preparedSlides: PreparedSlides;
    setPreparedSlides: Dispatch<SetStateAction<PreparedSlides>>;
}

const initialPreparedSlides: PreparedSlidesContext = {
    preparedSlides: [<div></div>, <div></div>, <div></div>],
    setPreparedSlides: () => {},
};

const PreparedSlides = createContext<PreparedSlidesContext>(
    initialPreparedSlides
);

interface MenuSliderProviderProps {
    children: ReactNode;
    initialSlides: Slides;
}

const MenuSliderProvider: FC<MenuSliderProviderProps> = ({
    children,
    initialSlides,
}) => {
    const [slides] = useState(initialSlides);

    const [index, setIndex] = useState(1);

    const [preparedSlides, setPreparedSlides] = useState(
        slides.slice(0, 3).map((slide) => slide.element) as PreparedSlides
    );

    return (
        <Slides.Provider value={{ slides }}>
            <Index.Provider value={{ index, setIndex }}>
                <PreparedSlides.Provider
                    value={{ preparedSlides, setPreparedSlides }}
                >
                    {children}
                </PreparedSlides.Provider>
            </Index.Provider>
        </Slides.Provider>
    );
};

export const useSlides = () => {
    const { slides } = useContext(Slides);
    return { slides };
};

export const useIndex = () => {
    const { index, setIndex } = useContext(Index);
    return { index, setIndex };
};

export const usePreparedSlides = () => {
    const { preparedSlides, setPreparedSlides } = useContext(PreparedSlides);
    return { preparedSlides, setPreparedSlides };
};

export const useSlider = () => {
    const { slides } = useSlides();

    const { index, setIndex } = useIndex();

    const { preparedSlides, setPreparedSlides } = usePreparedSlides();

    const updatePreparedSlides = (name: string, index: number) => {
        const slide = slides.find((slide) => slide.name === name);

        if (!slide) return;

        const result: PreparedSlides = [...preparedSlides];

        const realIndex = index - 1;

        if (0 <= realIndex && realIndex <= 2) {
            result[realIndex] = slide.element;
        }

        if (realIndex < 0) {
            result[2] = slide.element;
        }

        if (realIndex > 2) {
            result[0] = slide.element;
        }

        setPreparedSlides(result);
    };

    const forward = (name: string) => {
        updatePreparedSlides(name, index + 1);
        setIndex((prev) => prev + 1);
    };

    const back = (name: string) => {
        updatePreparedSlides(name, index - 1);
        setIndex((prev) => prev - 1);
    };

    return { forward, back };
};

export default MenuSliderProvider;
