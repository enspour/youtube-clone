"use client";

import { CSSProperties, FC, ReactNode, memo, useId } from "react";

type ContainerQueryConditional = "less than" | "more than";
type ContainerQueryWidth = `${number}px`;
type ContainerQuerySize = `${ContainerQueryConditional} ${ContainerQueryWidth}`;

const parseContainerQuerySize = (size: ContainerQuerySize) => {
    const [type, width] = [size.slice(0, 9), size.slice(10)] as [
        ContainerQueryConditional,
        ContainerQueryWidth
    ];

    return { type, width };
};

interface ContainerQueryProps {
    children: ReactNode | ReactNode[];
    size: ContainerQuerySize;
    style: CSSProperties;
}

const ContainerQuery: FC<ContainerQueryProps> = ({ children, size, style }) => {
    const id = useId().replaceAll(":", "");

    const { type, width } = parseContainerQuerySize(size);

    const typeToSize = {
        "less than": `max-width: ${width}`,
        "more than": `min-width: ${width}`,
    };

    const properties = Object.entries(style).map(
        ([key, value]) => `${key}: ${value}`
    );

    const query = `
        #container-query-${id} {
            @container container (${typeToSize[type]}) {
                ${properties}
            }
        }
    `;

    return (
        <div id={`container-query-${id}`}>
            <style>{query}</style>
            {children}
        </div>
    );
};

export default memo(ContainerQuery);
