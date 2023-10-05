import { FC, memo } from "react";

import { Container, ContainerQuery } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { UserAvatarSkeleton } from "@/components/ui/UserAvatar";

import styles from "./Information.module.scss";

const InformationSkeleton: FC = () => {
    return (
        <Container className={styles.info}>
            <Skeleton type="text" width="30%" fontSize="2rem" />

            <div className="flex justify-between">
                <div className={styles.info__user}>
                    <UserAvatarSkeleton diameter="4rem" />

                    <div className="flex flex-col justify-center mr-2">
                        <Skeleton type="text" width="6rem" fontSize="1.6rem" />
                        <Skeleton type="text" width="4rem" fontSize="1.4rem" />
                    </div>

                    <Skeleton
                        type="rectangle"
                        width="15rem"
                        height="3.5rem"
                        borderRadius="2rem"
                    />
                </div>

                <div className={styles.info__controls}>
                    <Skeleton
                        type="rectangle"
                        width="20rem"
                        height="3.5rem"
                        borderRadius="2rem"
                    />

                    <ContainerQuery
                        size="less than 700px"
                        style={{ display: "none" }}
                    >
                        <Skeleton
                            type="rectangle"
                            width="9rem"
                            height="3.5rem"
                            borderRadius="2rem"
                        />
                    </ContainerQuery>

                    <ContainerQuery
                        size="less than 800px"
                        style={{ display: "none" }}
                    >
                        <Skeleton
                            type="rectangle"
                            width="8rem"
                            height="3.5rem"
                            borderRadius="2rem"
                        />
                    </ContainerQuery>

                    <Skeleton
                        type="rectangle"
                        width="4rem"
                        height="4rem"
                        borderRadius="50%"
                    />
                </div>
            </div>
        </Container>
    );
};

export default memo(InformationSkeleton);
