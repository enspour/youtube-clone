// classes - Combining classes for styles

export const classes = (...classes: (string | undefined)[]) => {
    return classes.filter((name) => name).join(" ");
};
