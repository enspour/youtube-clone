"use client";

import Link from "next/link";
import { FC, ReactNode, memo } from "react";

import { useActiveLink } from "./MenuProvider";

import { classes } from "@/utils";

import styles from "./Menu.module.scss";

interface MenuLinkProps {
    children: ReactNode;
    href: string;
}

const MenuLink: FC<MenuLinkProps> = ({ children, href }) => {
    const { activePathname } = useActiveLink();

    return (
        <Link
            href={href}
            className={classes(
                styles.link,
                activePathname === href ? styles["list--active"] : ""
            )}
        >
            {children}
        </Link>
    );
};

export default memo(MenuLink);
