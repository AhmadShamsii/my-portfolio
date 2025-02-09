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
import { mobileBreakpoint } from "@/utils/constants";
import { useMediaQuery } from "react-responsive";

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
        <StyledProjectTitle>ZoneBit</StyledProjectTitle>
        <StyledProjectDesc>
          Zonebit.com is the world’s first culture casino, fully licensed and managed by a doxxed team of
          builders focused on revolutionizing the crypto casino industry by merging trading and gaming.
        </StyledProjectDesc>
        <Divider />
        <StyledProjectDetais>
          I got the opportunity to work on Zonebit as a side project. I was developing this project
          with 3 more devs and got to learn so much with this project. We have implemented multiple
          blockchain features in this like trades, casino, crypto charts and much more. I have got to learn
          so much with this project and got hands on experience with blockchain apps.
        </StyledProjectDetais>
        <Divider />
        <Row>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Timeline</ProjectProps>
            <ProjectProps>Dec 24 - Feb 25</ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Technologies</ProjectProps>
            <ProjectProps>
              React <br /> Web Sockets <br /> Web Workers <br /> TailwindCSS <br />
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Web services</ProjectProps>
            <ProjectProps>
              <a
                style={{ color: "black" }}
                href="https://documentation.chartiq.com/"
                target="_blank"
              >
                ChartIQ
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://day.js.org/"
                target="_blank"
              >
                Day.js
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://tanstack.com/query/latest"
                target="_blank"
              >
                React Query
              </a>
              <br />
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Links</ProjectProps>
            <ProjectProps>  <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://www.zonebit.com/"
              target="_blank"
            >
              Test it Live!
            </a>
              <RocketTwoTone /> </ProjectProps>
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
          A quick demonstration of the project with showcasing some of its major features.
        </StyledProjectDesc>
        <ProjectVideo
          muted
          loop
          playsInline
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1737645873/zonebit_mzbvnb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>
        <StyledProjectDesc style={{ margin: isMobile ? "50px 2vw" : "0 15%" }}>
          Zonebit.com is the world’s first culture casino, fully licensed and managed by a doxxed team of
          builders focused on revolutionizing the crypto casino industry by merging trading and gaming.
        </StyledProjectDesc>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{
              width: "50%", height: "100%", opacity: "0.75", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737646019/zonebit2_mmu3sm.png"
            alt={"imageAltText"}
          />
          <img
            style={{
              width: "40%", height: "100%", opacity: "0.75", marginLeft: "10%", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737646022/zonebit4_qvgyui.png"
            alt={"imageAltText"}
          />
        </div>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{
              width: "35%", height: "100%", opacity: "0.75", marginRight: "15%", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737646017/zonebit1_u245f6.png"
            alt={"imageAltText"}
          />
          <img
            style={{
              width: "50%", height: "100%", opacity: "0.75", borderRadius: "5px",
            }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737646022/zonebit3_w0mk3o.png"
            alt={"imageAltText"}
          />
        </div>
      </div>
      <Divider />
    </motion.div>
  );
};
export default ProjectDetails;
