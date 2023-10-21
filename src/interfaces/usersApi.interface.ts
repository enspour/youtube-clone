import { ApiResponse, User } from ".";

export interface UsersApi {
    fetchOne(id: number): Promise<ApiResponse<User | null>>;
}
