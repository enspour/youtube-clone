import { FC } from "react";

import { Button } from "@/components/ui/Button";

const HeaderLogin: FC = () => {
    const login = () => {};

    return (
        <Button type="outlined" onClick={login} palette="primary">
            Login
        </Button>
    );
};

export default HeaderLogin;
