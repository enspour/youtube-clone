export * from "./classes";
export * from "./convertRemToPx";
export * from "./formatUserFollowings";
export * from "./formatVideoCreatedAt";
export * from "./formatVideoDuration";
export * from "./formatVideoLikes";
export * from "./formatVideoViews";
export * from "./theme";

import { LocalStorage } from "./localStorage";

export const localStorage = new LocalStorage();
