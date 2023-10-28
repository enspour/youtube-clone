"use client";

import { FC } from "react";

import { Button } from "@/components/ui/Button";
import { UserAvatarSkeleton } from "@/components/ui/UserAvatar";

import { Video } from "@/interfaces";

import { formatUserSubscriptions } from "@/utils";

import styles from "./Information.module.scss";

interface InformationUserProps {
    video: Video;
}

const InformationUser: FC<InformationUserProps> = ({ video }) => {
    const follow = () => {};

    return (
        <div className={styles.info__user}>
            <UserAvatarSkeleton diameter="4rem" />

            <div className="flex flex-col justify-center mr-2">
                <div className={styles["info__user-name"]}>
                    {video.owner.name}
                </div>

                <div className={styles["info__user-subscriptions"]}>
                    {formatUserSubscriptions(video.owner.subscriptions)}
                </div>
            </div>

            <Button type="filled" onClick={follow} palette="secondary">
                Subscribe
            </Button>
        </div>
    );
};

export default InformationUser;
