import { formatNumber } from ".";

const formatter = {
    1_000: "views",
    1_000_000: "K views",
    1_000_000_000: "M views",
    [Infinity]: "",
};

const formats = Object.keys(formatter).map((value) => +value);

export const formatVideoViews = (views: number): string => {
    return formatNumber(views, formatter, formats);
};
