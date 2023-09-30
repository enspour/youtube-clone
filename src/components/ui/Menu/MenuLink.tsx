"use client";

import Link from "next/link";
import { FC, ReactNode, memo } from "react";

import { useActiveMenu } from "./MenuProvider";

import { classes } from "@/utils";

import styles from "./Menu.module.scss";

interface MenuLinkProps {
    children: ReactNode;
    href: string;
    id?: string;
}

const MenuLink: FC<MenuLinkProps> = ({ children, href, id = "" }) => {
    const [activeId] = useActiveMenu();

    return (
        <Link
            href={href}
            className={classes(
                styles.link,
                id && id === activeId ? styles.link__active : ""
            )}
        >
            {children}
        </Link>
    );
};

export default memo(MenuLink);
