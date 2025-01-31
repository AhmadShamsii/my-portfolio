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
        <StyledProjectTitle>Mapty</StyledProjectTitle>
        <StyledProjectDesc>
          Mapty is a web app to manage your workouts by pining the exact location of running and
          cycling and keeping the record of your workouts
        </StyledProjectDesc>
        <Divider />
        <div>
          I develop this web app while leaning Front-end development. I code along this application with
          a course from Udemy by Jonas Schmedtmann. In this you can keep the track of your workouts by
          adding the distance, elevation and duration of your running and cycling workuts.
        </div>
        <Divider />
        <Row>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Timeline</div>
            <div>Nov 2022 - Dec 2022</div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Technologies</div>
            <div>
              HTML <br /> CSS <br /> JavaScipt
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Web services</div>
            <div>
              <a
                style={{ color: "black" }}
                href="https://developers.google.com/maps"
                target="_blank"
              >
                Google Maps API
              </a>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Links</div>
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://main--shamsi-mapty.netlify.app/"
              target="_blank"
            >
              Test it Live!
            </a>
            <RocketTwoTone />
            <br />
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/Mapty"
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
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1738225011/mapty_zt33v5.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <StyledProjectDesc style={{ margin: "0 15%" }}>
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
