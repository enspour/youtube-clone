import { FC, memo } from "react";

import { Container } from "@/components/ui/Container";

import InformationControls from "./InformationControls";
import InformationUser from "./InformationUser";

import { Video } from "@/interfaces";

import styles from "./Information.module.scss";

interface InformationProps {
    video: Video;
}

const Information: FC<InformationProps> = ({ video }) => {
    return (
        <Container className={styles.info}>
            <div className={styles.info__name}>{video.name}</div>

            <div className="flex justify-between">
                <InformationUser video={video} />
                <InformationControls video={video} />
            </div>

            <div className={styles.info__description}></div>
        </Container>
    );
};

export default memo(Information);
