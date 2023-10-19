import { formatDateFromNow } from "./formatDateFromNow";

export const formatVideoCreatedAt = (createdAt: number): string => {
    const date = new Date(createdAt);
    return formatDateFromNow(date);
};
