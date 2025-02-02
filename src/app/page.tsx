"use client";
import { Col, Divider, Row } from "antd";
import Typography from "antd/es/typography/Typography";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import TexhnologiesCard from "@/components/TechnologiesCard/TechnologiesCard";
import styled from "styled-components";
import { colors } from "@/utils/colors";
import { desktopBreakpoint, largeDesktopBreakpoint, technlogies } from "@/utils/constants";
import { cardData } from "@/utils/constants";
import Experience from "@/components/Experience/Experience";
import Contact from "./contact/page";
import ContactForm from "@/components/Contact/Contact";
import { useMediaQuery } from "react-responsive";

const Text = Typography;

const StyledContainer = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${colors.lightgray};
`;
export const StyledText = styled(Text)`
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  font-size: 1.2vw;
  font-style: normal;
  color: ${colors.lightgray};
`;

const StyledDesc = styled(Text)`
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-size: 2vw;
  font-style: normal;
  color: ${colors.darkgray};
  background-image: linear-gradient(
    90deg,
    #7e8188 0%,
    #404246 50%,
    #404246 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Home = () => {
  const isDesktop = useMediaQuery({ query: largeDesktopBreakpoint });

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
      <Row style={{ margin: isDesktop ? "0 10vw" : "0vw" }} gutter={[24, 24]}>
        {cardData?.slice(0, 4)?.map((data, index) => (
          <Col key={`col-${index}`} span={data?.span}>
            <ProjectCard
              imageSrc={data.imageSrc}
              imageAltText={data.imageAltText}
              projectTitle={data.projectTitle}
              projectDesc={data.projectDesc}
              projectYear={data.projectYear}
              tags={data.tags}
              index={index}
            />
          </Col>
        ))}
      </Row>

      <Divider />
      <StyledText style={{ marginBottom: "30px" }}>Technologies</StyledText>
      <Row style={{ overflow: "hidden", whiteSpace: "nowrap", margin: isDesktop ? "0 10vw" : "0 2vw" }}>
        <TexhnologiesCard technologies={technlogies} />
      </Row>

      <Divider />
      <StyledText style={{ marginBottom: "30px" }}>Experience</StyledText>
      <Experience />


      <Divider />
      <StyledText style={{ marginBottom: "30px" }}>Contact</StyledText>
      <ContactForm />

    </StyledContainer>
  );
};

export default Home;
