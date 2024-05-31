"use client";
import { colors } from "@/utils/colors";
import { Card, Col, Divider, Row } from "antd";
import Typography from "antd/es/typography/Typography";
import Image from "next/image";
import styled from "styled-components";
import monstarz from "./../../public/monstarz.png";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const Text = Typography;

const StyledText = styled(Text)`
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  font-size: 18px;
  font-style: normal;
  color: ${colors.lightgray};
`;

const StyledDesc = styled(Text)`
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-size: 30px;
  font-style: normal;
  color: ${colors.darkgray};
`;

const Home = () => {
  return (
    <div>
      <StyledText>Hello there, </StyledText>
      <StyledDesc>
        Ahmad Shamsi is a frontend developer focused on React and Next.js,
        crafting user-friendly, high-performance web apps. Previously, he worked
        on various web development projects, honing his skills in modern
        frontend technologies. Moving forward, he aim to enhance his frontend
        skills and work on even more projects. <br /> Based in Islamabad,
        Pakistan
      </StyledDesc>
      <Divider />
      <Row gutter={16}>
        <Col span={16}>
          <Card hoverable>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={monstarz}
              alt="project 1 | Monstarz"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card hoverable>Card content</Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
