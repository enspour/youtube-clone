import { FC } from "react";

import { Comments } from "../ui/Comments";
import { Information } from "../ui/Information";

import { Video } from "@/interfaces";

import styles from "./Main.module.scss";

interface MainProps {
    video: Video;
}

const Main: FC<MainProps> = ({ video }) => {
    return (
        <div className={styles.main}>
            <Information video={video} />
            <Comments video={video} />
        </div>
    );
};

export default Main;
