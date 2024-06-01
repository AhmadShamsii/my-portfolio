"use client";
import { colors } from "@/utils/colors";
import { Card, Col, Divider, Row} from "antd";
import Typography from "antd/es/typography/Typography";
import styled from "styled-components";
import monstarz from "./../../public/monstarz.png";
import wordplay from "./../../public/wordplay.png";
import nexters from "./../../public/nexters.png";
import travelo from "./../../public/travelo.png";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { project1Tags, project2Tags, project3Tags, project4Tags } from "@/utils/constants";
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

const StyledCard = styled(Card)`
  border: 1px solid #ced4da;
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
          <ProjectCard
            imageSrc={monstarz}
            imageAltText={"project 1 | Monstar"}
            projectTitle={"Monstarz"}
            projectDesc="An
              e-commerce store along with admin dashboard"
            projectYear="2023"
            tags={project1Tags}
          />
        </Col>

        <Col span={8}>
          <ProjectCard
            imageSrc={wordplay}
            imageAltText={"project 2 | Wordplay"}
            projectTitle={"Wordplay"}
            projectDesc="A simple
              fun to play web game"
            projectYear="2024"
            tags={project2Tags}
          />
        </Col>

        <Col span={12}>
          <ProjectCard
            imageSrc={travelo}
            imageAltText={"project 3 | Travelo"}
            projectTitle={"Travelo"}
            projectDesc="A travel
            site to arrange tours and treks"
            projectYear="2023"
            tags={project3Tags}
          />
        </Col>

        <Col span={12}>
          <ProjectCard
            imageSrc={nexters}
            imageAltText={"project 4 | Nexters"}
            projectTitle={"Nexters"}
            projectDesc=" A real
            estate site"
            projectYear="2022"
            tags={project4Tags}
          />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Home;
