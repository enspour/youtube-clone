const parseArgs = () => {
    return process.argv.slice(2).reduce((acc, arg) => {
        if (arg.includes("=")) {
            const split = arg.split("=");
            return { ...acc, [split[0]]: split[1] };
        }
    }, {});
};

module.exports = {
    parseArgs,
};
