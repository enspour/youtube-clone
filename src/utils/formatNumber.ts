export const formatNumber = (
    num: number,
    formatter: Record<number, string>,
    formats: number[]
): string => {
    const index = formats.findIndex((value) => value > num);
    const format = formats[index];

    if (index === 0) {
        return `${num}${formatter[format]}`;
    }

    const value = (num / formats[index - 1]).toFixed();
    return `${value}${formatter[format]}`;
};
