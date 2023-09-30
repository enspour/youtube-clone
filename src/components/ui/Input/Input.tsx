import { FC, memo } from "react";

import SearchInput, { SearchInputProps } from "./SearchInput";
import TextInput, { TextInputProps } from "./TextInput";

type InputProps = TextInputProps | SearchInputProps;

const Input: FC<InputProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "text":
            return <TextInput {...props} />;
        case "search":
            return <SearchInput {...props} />;
    }
};

export default memo(Input);
