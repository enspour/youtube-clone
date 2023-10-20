import { fetchUser } from "@/server-actions/users";

export class UsersApi {
    static async fetchOne(id: number) {
        return fetchUser(id);
    }
}
