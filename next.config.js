/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },

    sassOptions: {
        logger: {
            warn(message) {
                console.warn(message);
            },

            debug(message) {
                console.log(message);
            },
        },
    },
};

module.exports = nextConfig;
