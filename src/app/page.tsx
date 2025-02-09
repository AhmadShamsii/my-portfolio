"use client";
import { Col, Divider, Row } from "antd";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import TexhnologiesCard from "@/components/TechnologiesCard/TechnologiesCard";
import styled from "styled-components";
import { colors } from "@/utils/colors";
import { desktopBreakpoint, largeDesktopBreakpoint, mobileBreakpoint, tabletBreakpoint, technlogies } from "@/utils/constants";
import { cardData } from "@/utils/constants";
import Experience from "@/components/Experience/Experience";
import ContactForm from "@/components/Contact/Contact";
import { useMediaQuery } from "react-responsive";
import { StyledDesc, StyledText } from "./styles";

const StyledContainer = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${colors.lightgray};
`;

const Home = () => {
  const isDesktop = useMediaQuery({ query: largeDesktopBreakpoint });
  const isSmallDesktop = useMediaQuery({ query: desktopBreakpoint });

  return (
    <StyledContainer>
      <StyledText >Hello there, </StyledText>
      <StyledDesc>
        Ahmad Shamsi is a frontend developer focused on React and Next.js,
        crafting user-friendly, high-performance web apps. Previously, he worked
        on various web development projects, honing his skills in modern
        frontend technologies. Moving forward, he aim to enhance his frontend
        skills and work on even more projects. <br /> Based in Islamabad,
        Pakistan.
      </StyledDesc>
      <Divider />
      <StyledText style={{ marginBottom: isSmallDesktop ? "30px" : "15px" }}>Projects</StyledText>
      <Row style={{ margin: isDesktop ? "0 10vw" : "0vw" }} gutter={isSmallDesktop ? [24, 24] : [12, 12]}>
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
      <StyledText style={{ marginBottom: isSmallDesktop ? "30px" : "15px" }}>Technologies</StyledText>
      <Row style={{ overflow: "hidden", whiteSpace: "nowrap", margin: isDesktop ? "0 10vw" : "0 2vw" }}>
        <TexhnologiesCard technologies={technlogies} />
      </Row>

      <Divider />
      <StyledText style={{ marginBottom: isSmallDesktop ? "30px" : "15px" }}>Experience</StyledText>
      <Experience />


      <Divider />
      <StyledText style={{ marginBottom: isSmallDesktop ? "30px" : "15px" }}>Contact</StyledText>
      <ContactForm isContactPage={false} />

    </StyledContainer>
  );
};

export default Home;
