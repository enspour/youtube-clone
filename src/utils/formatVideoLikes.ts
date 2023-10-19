import { formatNumber } from ".";

const formatter = {
    1_000: "",
    1_000_000: "K",
    1_000_000_000: "M",
    [Infinity]: "",
};

const formats = Object.keys(formatter).map((value) => +value);

export const formatVideoLikes = (likes: number): string => {
    return formatNumber(likes, formatter, formats);
};
