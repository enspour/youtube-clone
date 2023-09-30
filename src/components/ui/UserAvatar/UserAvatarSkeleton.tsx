import { FC, memo } from "react";

import { Skeleton } from "../Skeleton";

interface UserAvatarSkeletonProps {
    diameter: string;
}

const UserAvatarSkeleton: FC<UserAvatarSkeletonProps> = ({ diameter }) => {
    return <Skeleton type="circle" diameter={diameter} />;
};

export default memo(UserAvatarSkeleton);
