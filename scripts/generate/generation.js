const { v4: uuid } = require("uuid");

const LOREM = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

const LOREM_WORDS = LOREM.replaceAll(/[.,'!?]/g, "")
    .split(" ")
    .map((word) => word.trim().toLowerCase())
    .filter(Boolean);

const generate = (schema) => {
    const entry = {};

    for (let [key, value] of Object.entries(schema)) {
        if (typeof value === "function") {
            value = value();
        }

        entry[key] = value;
    }

    return entry;
};

const id = () => () => uuid();

const index = (id) => () => id++;

const words = (count) => () =>
    [...new Array(count)]
        .map(() => Math.floor(Math.random() * LOREM_WORDS.length))
        .map((index) => LOREM_WORDS[index])
        .join(" ");

const now = () => () => new Date().getTime();

const rand = (from, to) => () => Math.floor(Math.random() * (to - from)) + from;

module.exports = {
    generate,
    id,
    index,
    words,
    now,
    rand,
};
