import { FC, memo } from "react";

import RangeInput, { RangeInputProps } from "./RangeInput/RangeInput";
import SearchInput, { SearchInputProps } from "./SearchInput/SearchInput";
import TextInput, { TextInputProps } from "./TextInput/TextInput";
import TrackInput, { TrackInputProps } from "./TrackInput/TrackInput";

type InputProps =
    | TextInputProps
    | SearchInputProps
    | RangeInputProps
    | TrackInputProps;

const Input: FC<InputProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "text":
            return <TextInput {...props} />;
        case "search":
            return <SearchInput {...props} />;
        case "range":
            return <RangeInput {...props} />;
        case "track":
            return <TrackInput {...props} />;
    }
};

export default memo(Input);
