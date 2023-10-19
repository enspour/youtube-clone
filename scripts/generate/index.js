const fs = require("node:fs");

const { parseArgs } = require("./helpers");
const { generate, id, index, words, now, rand } = require("./generation");

(() => {
    const args = parseArgs();

    const dirname = args["--dirname"];

    const generateUsers = () => {
        const count = 10;

        const schema = {
            id: index(1),
            name: words(3),
            avatar: "/user_avatar.png",
            subscriptions: rand(100, 10_000_00),
            createdAt: now(),
        };

        return [...new Array(count)].map(() => generate(schema));
    };

    const generateVideos = (users) => {
        const count = 100;

        const schema = {
            id: id(),
            name: words(3),
            preview: "/video_preview.png",
            url: "/video.mp4",
            duration: rand(100, 999),
            likes: rand(100, 1_000_000),
            views: rand(100, 100_000_000),
            createdAt: now(),
            owner: () => users[rand(0, users.length)()],
        };

        return [...new Array(count)].map(() => generate(schema));
    };

    const users = generateUsers();
    const videos = generateVideos(users);

    fs.writeFileSync(`${dirname}/users.json`, JSON.stringify(users, null, 4));
    fs.writeFileSync(`${dirname}/videos.json`, JSON.stringify(videos, null, 4));
})();
