import { FC, memo } from "react";

import FilledButton, { FilledButtonProps } from "./FilledButton";
import OutlinedButton, { OutlinedButtonProps } from "./OutlinedButton";

type ButtonProps = FilledButtonProps | OutlinedButtonProps;

const Button: FC<ButtonProps> = (props) => {
    const { type } = props;

    switch (type) {
        case "filled":
            return <FilledButton {...props} />;
        case "outlined":
            return <OutlinedButton {...props} />;
    }
};

export default memo(Button);
