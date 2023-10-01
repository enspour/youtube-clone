import { memo } from "react";

import { withAuth } from "@/components/utils/withAuth";

import HeaderAuth from "./HeaderAuth";
import HeaderUnAuth from "./HeaderUnAuth";

const Header = withAuth(HeaderAuth, HeaderUnAuth);

export default memo(Header);
