import { memo } from "react";

import { withAuth } from "@/components/utils/withAuth";

import HeaderGuest from "./HeaderGuest";
import HeaderUser from "./HeaderUser";

const Header = withAuth(HeaderUser, HeaderGuest);

export default memo(Header);
