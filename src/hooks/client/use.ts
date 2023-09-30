export function use(promise: any) {
    if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else if (promise.status === "pending") {
        throw promise;
    } else {
        promise.status = "pending";
        promise.then(
            (result: any) => {
                promise.status = "fulfilled";
                promise.value = result;
            },
            (reason: any) => {
                promise.status = "rejected";
                promise.reason = reason;
            }
        );
        throw promise;
    }
}
