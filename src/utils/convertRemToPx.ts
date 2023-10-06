import { PxUnits, RemUnits } from "@/interfaces";

import { REM_TO_PX } from "@/constants";

export const convertRemToPx = (rem: RemUnits): PxUnits => {
    return `${parseFloat(rem) * REM_TO_PX}px`;
};
