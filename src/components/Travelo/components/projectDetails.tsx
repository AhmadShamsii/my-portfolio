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
        <StyledProjectTitle>Travelo</StyledProjectTitle>
        <StyledProjectDesc>
          Travelo is a tour managining agency site with a fascinating landing page
        </StyledProjectDesc>
        <Divider />
        <div>
          I code along this while learning Nextjs from youtube. This is for learning and to get my hands
          dirty with Nextjs and all of its concepts to play along with the things it provides.
        </div>
        <Divider />
        <Row>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Timeline</div>
            <div>Sept 2023 - Oct 2023</div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Technologies</div>
            <div>
              NextJS <br /> Tpescript <br />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Links</div>
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://travelo-azure.vercel.app/"
              target="_blank"
            >
              Test it Live!
            </a>
            <RocketTwoTone />
            <br />
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/Travelo"
              target="_blank"
            >
              Github Repo!
            </a>
            <GithubOutlined />
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
          A quick demonstration of the project
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
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1738152429/travelo_ugvsjr.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};
export default ProjectDetails;
