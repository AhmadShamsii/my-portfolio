"use client"
import { Col, Row } from "antd";
import { StyledText } from "../page";
import { cardData } from "@/utils/constants";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div>
      <StyledText style={{ marginBottom: "30px" }}>Projects</StyledText>
      <Row style={{ margin: "0 10vw" }} gutter={[24, 24]}>
        {cardData?.map((data, index) => (
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
    </div>
  );
};

export default Projects;
