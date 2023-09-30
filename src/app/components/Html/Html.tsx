import { Roboto } from "next/font/google";
import { ReactNode } from "react";

import { useTheme } from "@/hooks/server";

import { classes } from "@/utils";

import styles from "./Html.module.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface HtmlProps {
    children: ReactNode;
}

const Html = async ({ children }: HtmlProps) => {
    const { load } = useTheme();

    const theme = await load();

    return (
        <html lang="eu" style={{ ...theme }}>
            <body className={classes(roboto.className, styles.main)}>
                {children}
            </body>
        </html>
    );
};

export default Html;
