import users from "../../data/generated/users.json";

import { ApiResponse, User } from "@/interfaces";

let delay = 0;

export async function fetchUser(id: number): Promise<ApiResponse<User | null>> {
    return new Promise((resolve) => {
        const data = users.find((user) => user.id === id) || null;

        const response = {
            statusCode: 200,
            data,
        };

        setTimeout(resolve, delay, response);
    });
}
