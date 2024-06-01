"use client";
import { colors } from "@/utils/colors";
import { Card, Col, Divider, Flex, Row, Tag } from "antd";
import Typography from "antd/es/typography/Typography";
import Image from "next/image";
import styled from "styled-components";
import monstarz from "./../../public/monstarz.png";
import wordplay from "./../../public/wordplay.png";
import nexters from "./../../public/nexters.png";
import travelo from "./../../public/travelo.png";

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
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card hoverable>
            <Image
              style={{ width: "100%", height: "100%", opacity: "0.75" }}
              src={monstarz}
              alt="project 1 | Monstarz"
            />
          </Card>
          <Flex
            gap={20}
            style={{ margin: " 2% 3.5% 1%  3.5%", color: colors.black }}
            justify="space-between"
          >
            <StyledText style={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "300" }}> Monstarz</span> - An
              e-commerce store along with admin dashboard
            </StyledText>
            <StyledText style={{ fontSize: "16px", minWidth: "35px" }}>
              2023
            </StyledText>
          </Flex>
          <Flex style={{ marginLeft: "3.5%" }} gap="8px" wrap>
            <Tag color="#5ED3F3">React</Tag>
            <Tag color="#4096FF">Ant Design</Tag>
            <Tag color="#2F74C0">Typescript</Tag>
            <Tag color="#006494">Vercel</Tag>
          </Flex>
        </Col>

        <Col span={8}>
          <Card hoverable>
            <Image
              style={{ width: "100%", height: "80%", opacity: "1" }}
              src={wordplay}
              alt="project 2 | Wordplay"
            />
          </Card>
          <Flex
            gap="middle"
            style={{ margin: " 2% 3.5% 1%  3.5%", color: colors.black }}
            justify="space-between"
          >
            <StyledText style={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "300" }}> Wordplay</span> - A simple
              fun to play web game
            </StyledText>
            <StyledText style={{ fontSize: "16px", minWidth: "35px" }}>
              2024
            </StyledText>
          </Flex>
          <Flex style={{ marginLeft: "3.5%" }} gap="8px" wrap>
            <Tag color="#5ED3F3">React</Tag>
            <Tag color="#006494">Firebase</Tag>
            <Tag color="#4096FF">Ant Design</Tag>
            <Tag color="#2F74C0">Typescript</Tag>
          </Flex>
        </Col>

        <Col span={12}>
          <Card hoverable>
            <Image
              style={{ width: "100%", height: "100%", opacity: "0.9", border: `1px solid #dee2e6`}}
              src={travelo}
              alt="project 3 | Nexters"
            />
          </Card>
          <Flex
            gap="middle"
            style={{ margin: " 2% 3.5% 1%  3.5%", color: colors.black }}
            justify="space-between"
          >
            <StyledText style={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "300" }}> Travelo</span> - A travel
              site to arrange tours and treks
            </StyledText>
            <StyledText style={{ fontSize: "16px", minWidth: "35px" }}>
              2023
            </StyledText>
          </Flex>
          <Flex style={{ marginLeft: "3.5%" }} gap="8px" wrap>
            <Tag color="#006494">Next.js</Tag>
            <Tag color="#4096FF">Tailwindcss</Tag>
            <Tag color="#2F74C0">Typescript</Tag>
          </Flex>
        </Col>

        <Col span={12}>
          <Card hoverable>
            <Image
              style={{ width: "100%", height: "100%", opacity: "0.9" }}
              src={nexters}
              alt="project 3 | Nexters"
            />
          </Card>
          <Flex
            gap="middle"
            style={{ margin: " 2% 3.5% 1%  3.5%", color: colors.black }}
            justify="space-between"
          >
            <StyledText style={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "300" }}> Nexters</span> - A real estate site 
            </StyledText>
            <StyledText style={{ fontSize: "16px", minWidth: "35px" }}>
              2022
            </StyledText>
          </Flex>
          <Flex style={{ marginLeft: "3.5%" }} gap="8px" wrap>
            <Tag color="#006494">HTML</Tag>
            <Tag color="#4096FF">CSS</Tag>
          </Flex>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Home;
