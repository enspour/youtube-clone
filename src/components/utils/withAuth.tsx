import { FC } from "react";

import { useIsAuth } from "@/hooks/server";

export const withAuth = <P extends JSX.IntrinsicAttributes = {}>(
    AuthComponent: FC<P>,
    UnAuthComponent: FC<P>
) => {
    return function WithAuth(props: P) {
        const isAuth = useIsAuth();

        if (isAuth) {
            return <AuthComponent {...props} />;
        }

        return <UnAuthComponent {...props} />;
    };
};
