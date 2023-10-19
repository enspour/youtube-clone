import { formatNumber } from ".";

const formatter = {
    1_000: "subscriptions",
    1_000_000: "K subscriptions",
    1_000_000_000: "M subscriptions",
    [Infinity]: "",
};

const formats = Object.keys(formatter).map((value) => +value);

export const formatUserSubscriptions = (subscriptions: number): string => {
    return formatNumber(subscriptions, formatter, formats);
};
