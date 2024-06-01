"use client";
import { colors } from "@/utils/colors";
import { Card, Col, Divider, Flex, Row, Tag } from "antd";
import Typography from "antd/es/typography/Typography";
import Image from "next/image";
import styled from "styled-components";
import monstarz from "./../../public/monstarz.png";

const Text = Typography;

const StyledContainer = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${colors.lightgray};
`;
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
  /* margin-top: 10px; */
`;

const Home = () => {
  return (
    <StyledContainer>
      <StyledText>Hello there, </StyledText>
      <StyledDesc>
        Ahmad Shamsi is a frontend developer focused on React and Next.js,
        crafting user-friendly, high-performance web apps. Previously, he worked
        on various web development projects, honing his skills in modern
        frontend technologies. Moving forward, he aim to enhance his frontend
        skills and work on even more projects. <br /> Based in Islamabad,
        Pakistan.
      </StyledDesc>
      <Divider />
      <StyledText style={{ marginBottom: "30px" }}>Projects</StyledText>
      <Row gutter={16}>
        <Col span={16}>
          <Card hoverable>
            <Image
              style={{ width: "100%", height: "100%", opacity: "0.75" }}
              src={monstarz}
              alt="project 1 | Monstarz"
            />
          </Card>
          <Flex style={{ margin: " 2% 3.5% 1%  3.5%", color: colors.black }} justify="space-between">
          <StyledText >
          <span style={{fontWeight: "300"}} >  Monstarz</span> - An e-commerce store along with admin
            dashboard
          </StyledText>
          <StyledText>2023</StyledText>
          </Flex>
          <Flex style={{marginLeft: "3.5%"}} gap="8px" wrap>
            <Tag color="#5ED3F3">React</Tag>
            <Tag color="#4096FF">Ant Design</Tag>
            <Tag color="#2F74C0">Typescript</Tag>
            <Tag color="#006494">Vercel</Tag>
          </Flex>
        </Col>

        <Col span={8}>
          <Card hoverable>Card content</Card>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Home;
