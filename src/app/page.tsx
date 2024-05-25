"use client";
import Image from "next/image";
import styles from "./page.module.css";
import './global.css'
import { Anchor, Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  console.log(isSmallScreen, "check");
  return (
    <Row>
      <Col span={4}>
        <Anchor
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Part 1",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Part 2",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Part 3",
            },
          ]}
        />
      </Col>
      <Col span={20}>
        <div
          id="part-1"
          style={{ height: "100vh", background: "blue" }}
        />
        <div
          id="part-2"
          style={{ height: "100vh", background: "green" }}
        />
        <div
          id="part-3"
          style={{ height: "100vh", background: "red" }}
        />
      </Col>
    </Row>
  );
};
export default Home;
