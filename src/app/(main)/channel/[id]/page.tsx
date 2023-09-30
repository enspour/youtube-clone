import { getUser } from "@/server-actions/users";

interface PageProps {
    params: { id: string };
}

export default async function Page({ params }: PageProps) {
    const { id } = params;

    const user = await getUser(id);

    return <div>{JSON.stringify(user, null, 4)}</div>;
}
