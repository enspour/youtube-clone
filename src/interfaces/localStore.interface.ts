import * as names from "@/constants/localStore";

const { LOCAL_STORE_DEFAULT_VALUES, ...rest } = names;

export type LocalStoreKey = (typeof rest)[keyof typeof rest];
