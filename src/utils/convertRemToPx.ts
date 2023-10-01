import { REM_TO_PX } from "@/constants";

export const convertRemToPx = (rem: `${number}rem`) => {
    return parseFloat(rem) * REM_TO_PX;
};
