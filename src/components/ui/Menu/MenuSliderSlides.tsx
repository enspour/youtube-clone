import { FC } from "react";

import { InfinitySlider } from "../InfinitySlider";

import { useIndex, usePreparedSlides } from "./MenuSliderProvider";

const MenuSliderSlides: FC = () => {
    const { index, setIndex } = useIndex();

    const { preparedSlides } = usePreparedSlides();

    return (
        <InfinitySlider index={index} setIndex={setIndex}>
            {preparedSlides}
        </InfinitySlider>
    );
};

export default MenuSliderSlides;
