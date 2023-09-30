"use client";

import { FC, ReactNode, memo } from "react";

import { useMediaQuery } from "@/hooks/client";

interface MediaQueryProps {
    children: [ReactNode, ReactNode];
    query: string;
}

const MediaQuery: FC<MediaQueryProps> = ({ children, query }) => {
    const matches = useMediaQuery(query);

    if (matches) {
        return children[0];
    }

    return children[1];
};

export default memo(MediaQuery);
