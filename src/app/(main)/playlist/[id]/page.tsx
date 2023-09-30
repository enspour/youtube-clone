interface PageProps {
    params: { id: string };
}

export default function Page({ params }: PageProps) {
    const { id } = params;

    return <div>{id}</div>;
}
