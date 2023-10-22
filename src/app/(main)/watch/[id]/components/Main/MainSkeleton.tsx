import { FC } from "react";

import { CommentsSkeleton } from "../ui/Comments";
import { InformationSkeleton } from "../ui/Information";

import styles from "./Main.module.scss";

const MainSkeleton: FC = () => {
    return (
        <div className={styles.main}>
            <InformationSkeleton />
            <CommentsSkeleton />
        </div>
    );
};

export default MainSkeleton;
