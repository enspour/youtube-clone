import { ServerActionsUsersApi } from "./server-actions/Users.api";
import { ServerActionsVideosApi } from "./server-actions/Videos.api";

export const usersApi = new ServerActionsUsersApi();
export const videosApi = new ServerActionsVideosApi();
