import { FC, memo } from "react";

import FilledButton, { FilledButtonProps } from "./FilledButton/FilledButton";

import FilledDoubleButton, {
    FilledDoubleButtonProps,
} from "./FilledDoubleButton/FilledDoubleButton";

import FilledRoundedButton, {
    FilledRoundedButtonProps,
} from "./FilledRoundedButton/FilledRoundedButton";

import OutlinedButton, {
    OutlinedButtonProps,
} from "./OutlinedButton/OutlinedButton";

type ButtonProps =
    | FilledButtonProps
    | FilledDoubleButtonProps
    | FilledRoundedButtonProps
    | OutlinedButtonProps;

const Button: FC<ButtonProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "filled":
            return <FilledButton {...props} />;
        case "filled double":
            return <FilledDoubleButton {...props} />;
        case "filled rounded":
            return <FilledRoundedButton {...props} />;
        case "outlined":
            return <OutlinedButton {...props} />;
    }
};

export default memo(Button);
