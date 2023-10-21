import { fetchUser } from "@/server-actions/users";

import { UsersApi } from "@/interfaces";

export class UsersServerActionsApi implements UsersApi {
    async fetchOne(id: number) {
        return fetchUser(id);
    }
}
