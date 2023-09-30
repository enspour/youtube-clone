"use client";

import { useRouter } from "next/navigation";
import { CSSProperties, FC, MouseEvent, memo } from "react";

import { User } from "@/interfaces";

import styles from "./UserAvatar.module.scss";

interface UserAvatarProps {
    user: User;
    diameter: string;
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
            <img src={user.avatar} />
        </div>
    );
};

const getStyles = (diameter: string): CSSProperties => ({
    width: diameter,
    minWidth: diameter,
    height: diameter,
});

export default memo(UserAvatar);
