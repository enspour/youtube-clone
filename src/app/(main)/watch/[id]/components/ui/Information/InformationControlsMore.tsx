"use client";

import { FC } from "react";

import { ContainerQuery } from "@/components/ui/Container";
import { Menu, MenuButton, MenuGroup } from "@/components/ui/Menu";

import styles from "./Information.module.scss";

const InformationControlsMore: FC = () => {
    const share = () => {};
    const save = () => {};
    const complain = () => {};

    return (
        <div className={styles.info__more}>
            <Menu palette="secondary">
                <MenuGroup>
                    <ContainerQuery
                        size="more than 800px"
                        style={{ display: "none" }}
                    >
                        <MenuButton onClick={share}>Share</MenuButton>
                    </ContainerQuery>

                    <ContainerQuery
                        size="more than 900px"
                        style={{ display: "none" }}
                    >
                        <MenuButton onClick={save}>Save</MenuButton>
                    </ContainerQuery>

                    <MenuButton onClick={complain}>Complain</MenuButton>
                </MenuGroup>
            </Menu>
        </div>
    );
};

export default InformationControlsMore;
