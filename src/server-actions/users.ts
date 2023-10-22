import users from "../../data/generated/users.json";

import { ApiResponse, User } from "@/interfaces";

const delay = 0;

export async function fetchUser(id: number): Promise<ApiResponse<User>> {
    return new Promise((resolve) => {
        const data = users.find((user) => user.id === id)!;

        const response = {
            statusCode: 200,
            data,
        };

        setTimeout(resolve, delay, response);
    });
}
