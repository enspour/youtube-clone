"use client";

import { Input } from "@/components/ui/Input";

const HeaderSearch = () => {
    const onSearch = () => {};

    return (
        <Input
            type="search"
            onSearch={onSearch}
            placeholder="Type something..."
        />
    );
};

export default HeaderSearch;
