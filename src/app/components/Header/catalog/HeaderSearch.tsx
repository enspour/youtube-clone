"use client";

import { useState } from "react";

import { Input } from "@/components/ui/Input";

const HeaderSearch = () => {
    const [text, setText] = useState("");

    const onSearch = () => {};

    return (
        <Input
            text={text}
            setText={setText}
            type="search"
            onSearch={onSearch}
            placeholder="Type something..."
        />
    );
};

export default HeaderSearch;
