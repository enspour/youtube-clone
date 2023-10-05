import { FC, HTMLAttributes, ReactNode, memo } from "react";

import { classes } from "@/utils";

import styles from "./Container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode | ReactNode[];
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
    return (
        <div className={classes(styles.container, className)} {...props}>
            {children}
        </div>
    );
};

export default memo(Container);
