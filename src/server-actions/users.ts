import users from "../../data/generated/users.json";

let delay = 0;

export async function fetchUser(id: number) {
    return new Promise((resolve) => {
        const result = users.find((user) => user.id === id);
        setTimeout(resolve, delay, result);
    });
}
