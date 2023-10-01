"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties, FC, MouseEvent, memo } from "react";

import { User } from "@/interfaces";

import { convertRemToPx } from "@/utils";

import styles from "./UserAvatar.module.scss";

interface UserAvatarProps {
    user: User;
    diameter: `${number}rem`;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, diameter }) => {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        router.push(`/channel/${user.id}`);
    };

    return (
        <div
            className={styles.avatar}
            style={getStyles(diameter)}
            onClick={handleClick}
        >
            <Image
                src={user.avatar}
                alt="avatar"
                width={convertRemToPx(diameter)}
                height={convertRemToPx(diameter)}
            />
        </div>
    );
};

const getStyles = (diameter: `${number}rem`): CSSProperties => ({
    width: diameter,
    minWidth: diameter,
    height: diameter,
});

export default memo(UserAvatar);
