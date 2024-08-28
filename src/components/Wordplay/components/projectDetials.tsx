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
        <StyledProjectTitle>Wordplay</StyledProjectTitle>
        <StyledProjectDesc>
          A web game where a random letter is shown to a user and user has to
          type a word of it.
        </StyledProjectDesc>
        <Divider />
        <div>
          I developed this project to enhance my programming skills. This web
          games requires logic and a flow that i want to practice with this
          project. It includes user stats, leader boards and profile settings.
        </div>
        <Divider />
        <Row>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Timeline</div>
            <div>Nov 2023 - Mar 2024</div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Technologies</div>
            <div>
              React <br /> Firebase <br /> Typescript <br /> Ant Design <br />{" "}
              Styled Components
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Web services</div>
            <div>
              <a
                style={{ color: "black" }}
                href="https://firebase.google.com/"
                target="_blank"
              >
                Firebase
              </a>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ fontWeight: "bold" }}>Links</div>
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://wordplay-five.vercel.app/"
              target="_blank"
            >
              Test it Live!
            </a>
            <RocketTwoTone />
            <br />
            <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/wordplay"
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
          Game Flow
        </StyledProjectTitle>
        <StyledProjectDesc style={{ margin: "0 15%" }}>
          User can login by email, google or can continue as a guest and after
          login user can start the game. A random letter is shown to the user
          and user has a type a word starting from that letter in less than 5
          seconds and the game continues. User is not allowed to re-type the
          already used word and user failing to type the word in 5 seconds
          resulting in the game over.
        </StyledProjectDesc>
        <video
          muted
          loop
          playsInline
          style={{
            borderRadius: "5px",
            width: "70%",
            height: "70%",
            display: "block",
            margin: "5% auto",
          }}
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1724795578/wordplay-desktop-user-flow_x6teb7.mkv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <Divider />
      {/* ==================Game features=============== */}

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <StyledProjectTitle style={{ fontSize: "40px" }}>
          Game Features
        </StyledProjectTitle>
        <StyledProjectDesc style={{ margin: "0 15%" }}>
          User's stats and updated after every game. Each point consists of the
          number of letters the typed word contains e:g if user enters dog for
          d, user will get 3 points for this word and so on. Leaderboards are
          also updated respectively.
        </StyledProjectDesc>
        <video
          muted
          loop
          playsInline
          style={{
            borderRadius: "5px",
            width: "70%",
            height: "70%",
            display: "block",
            margin: "5% auto",
          }}
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1724796256/wordplay-desktop-game-feat_fxrws3.mkv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <Divider />
    </motion.div>
  );
};
export default ProjectDetails;
