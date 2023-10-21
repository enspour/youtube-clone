import { UsersServerActionsApi } from "./server-actions/Users.api";
import { VideosServerActionsApi } from "./server-actions/Videos.api";

export const usersApi = new UsersServerActionsApi();
export const videosApi = new VideosServerActionsApi();
