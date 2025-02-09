import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ProjectProps,
  ProjectVideo,
  StyledProjectDesc,
  StyledProjectDetails,
  StyledProjectDetais,
  StyledProjectTitle,
} from "../../../app/projects/styles";
import { Col, Divider, Row } from "antd";
import {
  GithubOutlined,
  InfoCircleOutlined,
  RocketTwoTone,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { mobileBreakpoint } from "@/utils/constants";

const ProjectDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once when in view
  const isMobile = useMediaQuery({ query: mobileBreakpoint });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and slide up when in view
      transition={{ duration: 0.8 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    >
      <StyledProjectDetails>
        <StyledProjectTitle>Mapty</StyledProjectTitle>
        <StyledProjectDesc>
          Mapty is a web app to manage your workouts by pining the exact location of running and
          cycling and keeping the record of your workouts
        </StyledProjectDesc>
        <Divider />
        <StyledProjectDetais>
          I develop this web app while leaning Front-end development. I code along this application with
          a course from Udemy by Jonas Schmedtmann. In this you can keep the track of your workouts by
          adding the distance, elevation and duration of your running and cycling workuts.
        </StyledProjectDetais>
        <Divider />
        <Row>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Timeline</ProjectProps>
            <ProjectProps>Nov 2022 - Dec 2022</ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Technologies</ProjectProps>
            <ProjectProps>
              HTML <br /> CSS <br /> JavaScipt
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Web services</ProjectProps>
            <ProjectProps>
              <a
                style={{ color: "black" }}
                href="https://developers.google.com/maps"
                target="_blank"
              >
                Google Maps API
              </a>
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Links</ProjectProps>
            <ProjectProps>  <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://main--shamsi-mapty.netlify.app/"
              target="_blank"
            >
              Test it Live!
            </a>
              <RocketTwoTone /> </ProjectProps>
            <ProjectProps>  <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/Mapty"
              target="_blank"
            >
              Github Repo!
            </a>
              <GithubOutlined /> </ProjectProps>
          </Col>
        </Row>
      </StyledProjectDetails>
      <Divider />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <StyledProjectTitle>
          Project Overview
          <InfoCircleOutlined
            style={{
              fontSize: "70%",
              backgroundColor: "#ebebf2",
              borderRadius: "50%",
              padding: "1.5%",
              marginLeft: "10px"
            }}
          />
        </StyledProjectTitle>
        <StyledProjectDesc>
          A quick demonstration of the project
        </StyledProjectDesc>
        <ProjectVideo
          muted
          loop
          playsInline
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1738225011/mapty_zt33v5.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>
        <StyledProjectDesc style={{ margin: isMobile ? "70px 2vw" : "0 15%" }}>
          User can add cycling and running workouts with their specifications like distance covered,
          duration, elevation/cadence with the exact location of the workout by pining the workout
          location in the google maps
        </StyledProjectDesc>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{
              width: "45%", height: "100%", opacity: "0.75", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738232536/mapty1_c05n1l.png"
            alt={"imageAltText"}
          />
          <img
            style={{
              width: "45%", height: "100%", opacity: "0.75", marginLeft: "10%", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738232536/mapty2_kufjox.png"
            alt={"imageAltText"}
          />
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectDetails;
