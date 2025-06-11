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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start off-screen and transparent
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Fade in and slide up when in view
      transition={{ duration: 0.8 }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    >
      <StyledProjectDetails>
        <StyledProjectTitle>Assisted Lives</StyledProjectTitle>
        <StyledProjectDesc>
          Assisted Live is a digital care management
          platform that provides monitoring of
          carers, logging in and out, medication and
          task changes, to reviews, and automates
          the process of assessments. It is a more
          effective way to schedule care calls and
          monitor
        </StyledProjectDesc>
        <Divider />
        <StyledProjectDetais>
          I worked on this project as a senior dev while working with 14 Digital. I have developed modules, features and tested a complete flow before
          deploying my code. I have also helped with code reviews and mentoring interns to develop this awazing software.
        </StyledProjectDetais>
        <Divider />
        <Row>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Timeline</ProjectProps>
            <ProjectProps>Feb 2025 - Present</ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Technologies</ProjectProps>
            <ProjectProps>
              Vue.js <br /> Bootstrap 
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Web services</ProjectProps>
            <ProjectProps>
              <a
                style={{ color: "black" }}
                href="https://ekoopmans.github.io/html2pdf.js/"
                target="_blank"
              >
                html2pdf.js
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://momentjs.com/"
                target="_blank"
              >
                moment
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://davidshimjs.github.io/qrcodejs/"
                target="_blank"
              >
                QRcode
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://sortablejs.github.io/Vue.Draggable/#/simple"
                target="_blank"
              >
                Vue Draggable
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://apexcharts.com/"
                target="_blank"
              >
                Apex Charts
              </a>
              <br />
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Links</ProjectProps>
            <ProjectProps> <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://staging.care360.14digitalhosting.co.uk//"
              target="_blank"
            >
              Test it Live!
            </a>
              <RocketTwoTone /> </ProjectProps>
            <ProjectProps> <a
              style={{ color: "black", marginRight: "5px" }}
              href="#"
              target="_blank"
            >
              Github Repo
            </a>
              <GithubOutlined /></ProjectProps >
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
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1749625915/screen-capture_pa7byc.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>
      </div>
    </motion.div>
  );
};
export default ProjectDetails;
