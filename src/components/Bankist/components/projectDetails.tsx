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
        <StyledProjectTitle>Bankist</StyledProjectTitle>
        <StyledProjectDesc>
          Bankist is simple digital banking site with minimilist animations and modern design and layout
        </StyledProjectDesc>
        <Divider />
        <StyledProjectDetais>
          I develop this site while leaning Front-end development. I code along this application with
          a course from Udemy by Jonas Schmedtmann. This is a simple landing page of a banking site with modals and
          animations implemented by vanilla JS.
        </StyledProjectDetais>
        <Divider />
        <Row>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Timeline</ProjectProps>
            <ProjectProps>Dec 2022</ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Technologies</ProjectProps>
            <ProjectProps>
              HTML <br /> CSS <br /> JavaScipt
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Links</ProjectProps>
            <ProjectProps> <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://shamsi-bankist.netlify.app/"
              target="_blank"
            >
              Test it Live!
            </a>
              <RocketTwoTone /> </ProjectProps>
            <ProjectProps>  <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/Bankist"
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
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1738233396/bankist_kqzqvx.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>
        <StyledProjectDesc style={{ margin: isMobile ? "70px 2vw" : "0 15%" }}>
          A modern yet minimilist landing page with cool animations and transitions developed using HTML, CSS and
          vanilla JavaScript.
        </StyledProjectDesc>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{
              width: "45%", height: "100%", opacity: "0.75", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738233491/bankist1_lld55i.png"
            alt={"imageAltText"}
          />
          <img
            style={{
              width: "45%", height: "100%", opacity: "0.75", marginLeft: "10%", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738233492/bankist2_iudlro.png"
            alt={"imageAltText"}
          />
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectDetails;
