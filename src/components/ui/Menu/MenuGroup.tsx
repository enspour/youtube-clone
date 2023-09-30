import { FC, ReactNode, memo } from "react";

import styles from "./Menu.module.scss";

interface MenuGroupProps {
    children: ReactNode | ReactNode[];
    title?: string;
}

const MenuGroup: FC<MenuGroupProps> = ({ children, title }) => {
    return (
        <div className={styles.group}>
            {title && <div className={styles.group__title}>{title}</div>}
            <div className={styles.group__items}>{children}</div>
        </div>
    );
};

export default memo(MenuGroup);
