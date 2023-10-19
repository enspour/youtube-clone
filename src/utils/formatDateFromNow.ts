const formatter = {
    60: "Just Now",
    120: "minute ago",
    3_600: "minutes ago",
    7_200: "hour ago",
    86_400: "hours ago",
    172_800: "day ago",
    604_800: "days ago",
    1_209_600: "week ago",
    2_419_200: "weeks ago",
    4_838_400: "month ago",
    29_030_400: "months ago",
    58_060_800: "year ago",
    [Infinity]: "years ago",
};

const formats = Object.keys(formatter).map((value) => +value);

export const formatDateFromNow = (date: Date) => {
    const now = new Date();

    const diff = now.getTime() - date.getTime();

    const seconds = diff / 1000;

    const index = formats.findIndex((value) => value > seconds);
    const format = formats[index];

    if (index === 0) {
        return formatter[format];
    }

    const value = (seconds / formats[index - 1]).toFixed();
    return `${value} ${formatter[format]}`;
};
