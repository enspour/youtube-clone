"use client";

import { FC } from "react";

import { Button } from "@/components/ui/Button";
import { ContainerQuery } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Popper, PopperContent, PopperToggle } from "@/components/ui/Popper";

import InformationControlsMore from "./InformationControlsMore";

import { Video } from "@/interfaces";

import { formatVideoLikes } from "@/utils";

import MoreIcon from "@/assets/icons/watch/more.svg";

import styles from "./Information.module.scss";

interface InformationControlsProps {
    video: Video;
}

const InformationControls: FC<InformationControlsProps> = ({ video }) => {
    const like = () => {};
    const dislike = () => {};
    const share = () => {};
    const save = () => {};

    return (
        <div className={styles.info__controls}>
            <Button
                type="filled double"
                renderLeft={() => `Like ${formatVideoLikes(video.likes)}`}
                renderRight={() => "Dislike"}
                onClickLeft={like}
                onClickRight={dislike}
                palette="secondary"
            />

            <ContainerQuery size="less than 700px" style={{ display: "none" }}>
                <Button type="filled" onClick={share} palette="secondary">
                    Share
                </Button>
            </ContainerQuery>

            <ContainerQuery size="less than 800px" style={{ display: "none" }}>
                <Button type="filled" onClick={save} palette="secondary">
                    Save
                </Button>
            </ContainerQuery>

            <Popper type="right">
                <PopperToggle>
                    <Button type="filled rounded" palette="secondary">
                        <Icon
                            svg={MoreIcon}
                            cursor="pointer"
                            palette="secondary"
                        />
                    </Button>
                </PopperToggle>

                <PopperContent>
                    <InformationControlsMore />
                </PopperContent>
            </Popper>
        </div>
    );
};

export default InformationControls;
