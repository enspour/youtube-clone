import { Metadata } from "next";

import { VideoPlayerPictureInPicture } from "@/components/screens/VideoPlayerPictureInPicture";
import { VideoPlayerSetup } from "@/components/screens/VideoPlayerSetup";

import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Html } from "./components/Html";
import { Sidebar } from "./components/Sidebar";

import "@/assets/styles/global.scss";
import "@/assets/styles/reset.css";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
    title: "CloneTube",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Html>
            <Header />

            <div className={styles.container}>
                <Sidebar />
                <Content>{children}</Content>
            </div>

            <VideoPlayerSetup />
            <VideoPlayerPictureInPicture />
        </Html>
    );
}
