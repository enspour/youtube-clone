export const formatVideoCreatedAt = (createdAt: number): string => {
    const date = new Date(createdAt);
    return `${date.toLocaleDateString("en-US")}`;
};
