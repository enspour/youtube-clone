interface PageProps {
    params: { id: string };
}

export default async function Page({ params }: PageProps) {
    const { id } = params;

    return <div>{id}</div>;
}
