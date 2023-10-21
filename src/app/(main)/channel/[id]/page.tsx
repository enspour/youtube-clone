import { usersApi } from "@/api";

import { isSuccessResponse } from "@/interfaces";

interface PageProps {
    params: { id: string };
}

export default async function Page({ params }: PageProps) {
    const { id } = params;

    const response = await usersApi.fetchOne(parseInt(id));

    if (isSuccessResponse(response)) {
        const { data } = response;

        return <div>{JSON.stringify(data, null, 4)}</div>;
    }

    return null;
}
