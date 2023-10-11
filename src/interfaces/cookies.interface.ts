import * as names from "@/constants/cookies";

const { COOKIE_DEFAULT_VALUES, ...rest } = names;

export type CookieKey = (typeof rest)[keyof typeof rest];
