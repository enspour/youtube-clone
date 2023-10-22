import { FC } from "react";

import { SuggestionsSkeleton } from "../ui/Suggestions";

import styles from "./Sidebar.module.scss";

const SidebarSkeleton: FC = () => {
    return (
        <div className={styles.sidebar}>
            <SuggestionsSkeleton skeleton={10} />
        </div>
    );
};

export default SidebarSkeleton;
