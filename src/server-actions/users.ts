import { users } from "@/data/users";

let delay = 0;

export async function getUser(id: string) {
    return new Promise((resolve) => {
        const result = users.find((user) => user.id === id);
        setTimeout(resolve, delay, result);
    });
}
