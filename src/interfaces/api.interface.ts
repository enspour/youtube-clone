import {
    ErrorHttpStatusCode,
    NetworkErrorHttpStatusCode,
    SuccessHttpStatusCode,
    errorHttpStatusCodes,
    networkErrorHttpStatusCodes,
    successHttpStatusCode,
} from ".";

export interface NetworkErrorResponse {
    statusCode: NetworkErrorHttpStatusCode;
    message: string;
}

export interface ErrorResponse {
    statusCode: ErrorHttpStatusCode;
    message: string;
    error: string;
}

export interface SuccessResponse<T> {
    statusCode: SuccessHttpStatusCode;
    message: string;
    data: T;
}

export type ApiResponse<T> =
    | SuccessResponse<T>
    | ErrorResponse
    | NetworkErrorResponse;

export function isSuccessResponse(
    response: ApiResponse<any>
): response is SuccessResponse<any> {
    const { statusCode } = response;

    return successHttpStatusCode.includes(statusCode as SuccessHttpStatusCode);
}

export function isErrorResponse(
    response: ApiResponse<any>
): response is ErrorResponse {
    const { statusCode } = response;

    return errorHttpStatusCodes.includes(statusCode as ErrorHttpStatusCode);
}

export function isNetworkErrorResponse(
    response: ApiResponse<any>
): response is NetworkErrorResponse {
    const { statusCode } = response;

    return networkErrorHttpStatusCodes.includes(
        statusCode as NetworkErrorHttpStatusCode
    );
}
