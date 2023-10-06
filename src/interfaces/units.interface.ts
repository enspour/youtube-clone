export type UnitType = "%" | "px" | "rem";

export type PercentUnits = `${number}%`;
export type PxUnits = `${number}px`;
export type RemUnits = `${number}rem`;

const isUnits = (units: unknown, type: UnitType): boolean => {
    if (typeof units === "string" && units.endsWith(type)) {
        return true;
    }

    return false;
};

export const isPercentUnits = (units: unknown): units is PercentUnits =>
    isUnits(units, "%");

export const isPxUnits = (units: unknown): units is PxUnits =>
    isUnits(units, "px");

export const isRemUnits = (units: unknown): units is RemUnits =>
    isUnits(units, "rem");
