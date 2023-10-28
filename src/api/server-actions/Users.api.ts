import { fetchUser } from "@/server-actions/users";

import { UsersApi } from "@/interfaces";

export class ServerActionsUsersApi implements UsersApi {
    async fetchOne(id: number) {
        return fetchUser(id);
    }
}
