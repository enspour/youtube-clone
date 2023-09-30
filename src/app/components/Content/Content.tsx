import { FC, ReactNode } from "react";

import styles from "./Content.module.scss";

interface ContentProps {
    children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
    return <div className={styles.content}>{children}</div>;
};

export default Content;
