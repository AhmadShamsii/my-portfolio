"use client";
import { useState } from "react";
import { Col, Divider, Row } from "antd";
import Typography from "antd/es/typography/Typography";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import TexhnologiesCard from "@/components/TechnologiesCard/TechnologiesCard";
import styled from "styled-components";
import { colors } from "@/utils/colors";
import { technlogies } from "@/utils/constants";
import { cardData } from "@/utils/constants";
const Text = Typography;

const StyledContainer = styled.div`
  font-family: "Kanit", sans-serif;
  color: ${colors.lightgray};
`;
export const StyledText = styled(Text)`
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
  const [imageDimensions, setImageDimensions] = useState<{
    [key: string]: { width: number; height: number };
  }>({});

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
        {cardData.map((data, index) => (
          <Col key={`col-${index}`} span={data?.span}>
            <ProjectCard
              imageSrc={data.imageSrc}
              imageAltText={data.imageAltText}
              projectTitle={data.projectTitle}
              projectDesc={data.projectDesc}
              projectYear={data.projectYear}
              tags={data.tags}
              setImageDimensions={setImageDimensions}
              index={index}
            />
            {imageDimensions[data.id] && (
              <>
                <p>Width: {imageDimensions[data.id].width}px</p>
                <p>Height: {imageDimensions[data.id].height}px</p>
              </>
            )}
          </Col>
        ))}
      </Row>
      <Divider />
      <StyledText style={{ marginBottom: "30px" }}>Technologies</StyledText>

      <Row style={{ overflow: "hidden", whiteSpace: "nowrap",  }}>
        <TexhnologiesCard technologies={technlogies} />
      </Row>
    </StyledContainer>
  );
};

export default Home;
