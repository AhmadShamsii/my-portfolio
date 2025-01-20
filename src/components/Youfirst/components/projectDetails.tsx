import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  StyledProjectDesc,
  StyledProjectDetails,
  StyledProjectTitle,
} from "../../../app/projects/styles";
import { Col, Divider, Image, Row } from "antd";
import {
  ArrowUpOutlined,
  GithubOutlined,
  InfoCircleOutlined,
  RocketTwoTone,
  UserOutlined,
} from "@ant-design/icons";

import monstarzCollection from "./../../../../public/monstarzCollection.png";
import monstarzAdmin from "./../../../../public/monstarz-admin.png";

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
        <StyledProjectTitle>YouFirst</StyledProjectTitle>
        <StyledProjectDesc>
          A Human Resource Management(HRM) software with employees details, attendance procedure, requests, surveys,
          feeds and much more features.
        </StyledProjectDesc>
        <Divider />
        <div>
          I got the opportunity to work on Youfirst while working with JMM Technologies.
          It is much more than a simple HRM software and includes much more features like
          Language Selection, Recruitment Management, Surveys, Reports and many other features.
        </div>
        <Divider />
        <Row>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Timeline</div>
            <div>July - Jan 2025</div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Technologies</div>
            <div>
              React <br /> GraphQl <br /> Ant Design <br /> TailwindCSS <br /> Zustand
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Web services</div>
            <div>
              <a
                style={{ color: "black" }}
                href="https://apexcharts.com/"
                target="_blank"
              >
                Apex Charts
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
                href="https://html2canvas.hertzen.com/"
                target="_blank"
              >
                html2canvas
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://sheetjs.com/"
                target="_blank"
              >
                SheetJS
              </a>
              <br />
              <a
                style={{ color: "black" }}
                href="https://mozilla.github.io/pdf.js/"
                target="_blank"
              >
                PDF.js
              </a>
              <br />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Links</div>
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://hrm.hrmtests.com/"
              target="_blank"
            >
              Test it Live!
            </a>
            <RocketTwoTone />
            <br />
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/jmm-technologies/HRM-Frontend"
              target="_blank"
            >
              Github Repo
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
              fontSize: "40px",
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
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1737400399/2ab98887-1ffd-4e3e-b23a-e3d2b48dca4c_tpz1fi.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <StyledProjectDesc style={{ margin: "0 15%" }}>
          User can add employees and assign permissions to each employee as per the user wants
          with this only the selected modules will be visible to the user and user can only add/update those
          modules as per the permission, more than this user can add departments, designations, reports, notices and
          everything else.
        </StyledProjectDesc>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{ width: "50%", height: "100%" }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737401411/youfirst4_zfqu24.png"
            alt={"imageAltText"}
          />
          <img
            style={{ width: "40%", height: "100%", marginLeft: "10%" }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737401219/youfirst3_rhndm7.png"
            alt={"imageAltText"}
          />
        </div>
        <div style={{ display: "flex", margin: "5% 0" }}>
          <img
            style={{ width: "35%", height: "100%", marginRight: "15%" }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737401822/youfirst2_xlf4im.png"
            alt={"imageAltText"}
          />
          <img
            style={{ width: "50%", height: "100%" }}
            src="https://res.cloudinary.com/dzxarcdmq/image/upload/v1737402420/youfirst1_wrkgnn.png"
            alt={"imageAltText"}
          />
        </div>
      </div>
      <Divider />
    </motion.div>
  );
};
export default ProjectDetails;
