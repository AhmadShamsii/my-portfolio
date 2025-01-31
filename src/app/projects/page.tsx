"use client";
import React from "react";
import { Col, Row } from "antd";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { StyledSubTitle, StyledTitle } from "./styles";
import { cardData } from "@/utils/constants";

const Projects: React.FC = () => {
  // Track the last rendered category to avoid duplicate headings
  let lastCategory: string | null = null;

  return (
    <div style={{ marginTop: "2.5%" }}>
      <StyledTitle>Projects</StyledTitle>
      <Row style={{ margin: "0 10vw" }} gutter={[24, 24]}>
        {cardData?.map((data: any, index: number) => {
          const isNewCategory = data.category !== lastCategory; // Check if the category is new
          lastCategory = data.category; // Update the last rendered category

          return (
            <React.Fragment key={`fragment-${data.id}`}>
              {isNewCategory && (
                <Col span={24} key={`heading-${data.category}`}>
                  <StyledSubTitle
                  >
                    {data.category}
                  </StyledSubTitle>
                </Col>
              )}
              <Col key={`col-${data.id}`} span={data?.span}>
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
            </React.Fragment>
          );
        })}
      </Row>
    </div>
  );
};

export default Projects;
