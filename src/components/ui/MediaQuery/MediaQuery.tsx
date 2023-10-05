"use client";

import { FC, ReactNode, memo } from "react";

import { useMediaQuery } from "@/hooks/client";

interface MediaQueryProps {
    children: [ReactNode, ReactNode] | ReactNode;
    query: string;
}

const MediaQuery: FC<MediaQueryProps> = ({ children, query }) => {
    const matches = useMediaQuery(query);

    if (matches) {
        return Array.isArray(children) ? children[0] : children;
    }

    return Array.isArray(children) ? children[1] : null;
};

export default memo(MediaQuery);
