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
        <StyledProjectTitle>Nexters</StyledProjectTitle>
        <StyledProjectDesc>
          Nexters is a real estate agency site with a simple and responsive landing page
        </StyledProjectDesc>
        <Divider />
        <StyledProjectDetais>
          I develop this simple landing page in my early days of learning development. I was following a
          course by Jonas Schmedtmann in Udemy to learn HTML, CSS and JavaScript and in that couse i code along
          and develop this simple landing page using just HTML and CSS.
        </StyledProjectDetais>
        <Divider />
        <Row>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Timeline</ProjectProps>
            <ProjectProps>Sept 2022 - Oct 2022</ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Technologies</ProjectProps>
            <ProjectProps>
              HTML <br /> CSS <br />
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Links</ProjectProps>
            <ProjectProps>  <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://shamsi-nexters.netlify.app/"
              target="_blank"
            >
              Test it Live!
            </a>
              <RocketTwoTone /> </ProjectProps>
            <ProjectProps>  <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/Nexters"
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
        <StyledProjectTitle >
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
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1738148026/nexters1_lds63w.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>
        <StyledProjectDesc style={{ margin: isMobile ? "70px 2vw" : "0 15%" }}>
          Nexters is responsive in all the screens ranging from small mobile phones to larger desktops.
          Below is demonstration of that.
        </StyledProjectDesc>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{
              width: "70%", height: "100%", opacity: "0.75", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738148637/nexters1_b079js.png"
            alt={"imageAltText"}
          />
          <img
            style={{
              width: "20%", height: "100%", opacity: "0.75", marginLeft: "10%", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738148780/nexters2_eirc6d.png"
            alt={"imageAltText"}
          />
        </div>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{
              width: "20%", height: "100%", opacity: "0.75", marginRight: "10%", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738148893/nexters4_h3oebv.png"
            alt={"imageAltText"}
          />
          <img
            style={{
              width: "70%", height: "100%", opacity: "0.75", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1738148638/nexters3_k4josc.png"
            alt={"imageAltText"}
          />
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectDetails;
