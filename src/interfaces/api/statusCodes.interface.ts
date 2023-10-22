export const successHttpStatusCode = [200, 201, 202] as const;

export type SuccessHttpStatusCode = (typeof successHttpStatusCode)[number];

export const errorHttpStatusCodes = [400, 401, 403, 404, 500] as const;

export type ErrorHttpStatusCode = (typeof errorHttpStatusCodes)[number];

export const networkErrorHttpStatusCodes = [0] as const; // Network Error, Aborted Request, Timeout error

export type NetworkErrorHttpStatusCode =
    (typeof networkErrorHttpStatusCodes)[number];
