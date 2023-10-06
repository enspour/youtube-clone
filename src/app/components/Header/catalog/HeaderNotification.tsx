"use client";

import { FC } from "react";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Popper, PopperContent, PopperToggle } from "@/components/ui/Popper";

import NotificationIcon from "@/assets/icons/header/notification.svg";

import styles from "../Header.module.scss";

const HeaderNotification: FC = () => {
    return (
        <Popper type="right">
            <PopperToggle>
                <Button type="filled circle" diameter="4rem">
                    <Icon svg={NotificationIcon} cursor="pointer" />
                </Button>
            </PopperToggle>

            <PopperContent>
                <div className={styles.header__notification}>Notifications</div>
            </PopperContent>
        </Popper>
    );
};

export default HeaderNotification;
