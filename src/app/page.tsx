"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./global.css";
import { Anchor, Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import MobileLayout from "./components/MobileLayout";
import DesktopLayout from "./components/DesktopLayout";

const Home = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return <div>{isSmallScreen ? <MobileLayout /> : <DesktopLayout />}</div>;
};
export default Home;
