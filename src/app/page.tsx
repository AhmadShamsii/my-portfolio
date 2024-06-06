'use client';
import { useEffect, useState } from 'react';
import { Col, Divider, Row } from 'antd';
import Typography from 'antd/es/typography/Typography';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import TexhnologiesCard from '@/components/TechnologiesCard/TechnologiesCard';
import styled from 'styled-components';
import { colors } from '@/utils/colors';
import { technlogies } from '@/utils/constants';
import { cardData } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import {
  setMonstarzDetails,
  setNextersDetails,
  setTraveloDetails,
  setWordplayDetails,
} from '@/lib/features/projects/slice';
const Text = Typography;

const StyledContainer = styled.div`
  font-family: 'Kanit', sans-serif;
  color: ${colors.lightgray};
`;
export const StyledText = styled(Text)`
  font-family: 'Kanit', sans-serif;
  font-weight: 200;
  font-size: 18px;
  font-style: normal;
  color: ${colors.lightgray};
`;

const StyledDesc = styled(Text)`
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
  font-size: 30px;
  font-style: normal;
  color: ${colors.darkgray};
`;

const Home = () => {
  const dispatch = useDispatch();
  const [imageDimensions, setImageDimensions] = useState<{
    [key: string]: { width: number; height: number };
  }>({});

  useEffect(() => {
    dispatch(setMonstarzDetails(Object.values(imageDimensions)[0]));
    dispatch(setWordplayDetails(Object.values(imageDimensions)[1]));
    dispatch(setTraveloDetails(Object.values(imageDimensions)[2]));
    dispatch(setNextersDetails(Object.values(imageDimensions)[3]));
  }, [imageDimensions]);

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
      <StyledText style={{ marginBottom: '30px' }}>Projects</StyledText>
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
          </Col>
        ))}
      </Row>
      <Divider />
      <StyledText style={{ marginBottom: '30px' }}>Technologies</StyledText>

      <Row style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TexhnologiesCard technologies={technlogies} />
      </Row>
    </StyledContainer>
  );
};

export default Home;
