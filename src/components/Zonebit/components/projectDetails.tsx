import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  StyledProjectDesc,
  StyledProjectDetails,
  StyledProjectTitle,
} from "../../../app/projects/styles";
import { Col, Divider, Row } from "antd";
import {
  GithubOutlined,
  InfoCircleOutlined,
  RocketTwoTone,
} from "@ant-design/icons";

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
        <StyledProjectTitle>ZoneBit</StyledProjectTitle>
        <StyledProjectDesc>
          Zonebit.com is the world’s first culture casino, fully licensed and managed by a doxxed team of
          builders focused on revolutionizing the crypto casino industry by merging trading and gaming.
        </StyledProjectDesc>
        <Divider />
        <div>
          I got the opportunity to work on Zonebit as a side project. I was developing this project
          with 3 more devs and got to learn so much with this project. We have implemented multiple
          blockchain features in this like trades, casino, crypto charts and much more. I have got to learn
          so much with this project and got hands on experience with blockchain apps.
        </div>
        <Divider />
        <Row>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Timeline</div>
            <div>Dec 2024 - Feb 2025</div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Technologies</div>
            <div>
              React <br /> Web Sockets <br /> Web Workers <br /> TailwindCSS <br />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Web services</div>
            <div>
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
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Links</div>
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://www.zonebit.com/"
              target="_blank"
            >
              Test it Live!
            </a>
            <RocketTwoTone />
          </Col>
        </Row>
      </StyledProjectDetails>
      <Divider />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <StyledProjectTitle style={{ fontSize: "40px" }}>
          Project Overview
          <InfoCircleOutlined
            style={{
              fontSize: "35px",
              backgroundColor: "#ebebf2",
              borderRadius: "50%",
              padding: "10px",
              marginLeft: "10px"
            }}
          />
        </StyledProjectTitle>
        <StyledProjectDesc>
          A quick demonstration of the project with showcasing some of its major features.
        </StyledProjectDesc>
        <video
          muted
          loop
          playsInline
          style={{
            borderRadius: "5px",
            width: "70%",
            height: "70%",
            opacity: "0.75",
            display: "block",
            margin: "5% auto",
          }}
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1737645873/zonebit_mzbvnb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <StyledProjectDesc style={{ margin: "0 15%" }}>
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
