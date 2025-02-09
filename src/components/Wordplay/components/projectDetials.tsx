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
        <StyledProjectTitle>Wordplay</StyledProjectTitle>
        <StyledProjectDesc>
          A web game where a random letter is shown to a user and user has to
          type a word of it.
        </StyledProjectDesc>
        <Divider />
        <StyledProjectDetais>
          I developed this project to enhance my programming skills. This web
          games requires logic and a flow that i want to practice with this
          project. It includes user stats, leader boards and profile settings.
        </StyledProjectDetais>
        <Divider />
        <Row>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Timeline</ProjectProps>
            <ProjectProps>Nov 2023 - Mar 2024</ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Technologies</ProjectProps>
            <ProjectProps>
              React <br /> Firebase <br /> Typescript <br /> Ant Design <br />{" "}
              Styled Components
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Web services</ProjectProps>
            <ProjectProps>
              <a
                style={{ color: "black" }}
                href="https://firebase.google.com/"
                target="_blank"
              >
                Firebase
              </a>
            </ProjectProps>
          </Col>
          <Col span={6}>
            <ProjectProps style={{ fontWeight: "bold" }}>Links</ProjectProps>
            <ProjectProps> <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://wordplay-five.vercel.app/"
              target="_blank"
            >
              Test it Live!
            </a>
              <RocketTwoTone /> </ProjectProps>
            <ProjectProps>  <a
              style={{ color: "black", marginRight: "5px" }}
              href="https://github.com/AhmadShamsii/wordplay"
              target="_blank"
            >
              Github Repo
            </a>
              <GithubOutlined /> </ProjectProps>
          </Col>
        </Row>
      </StyledProjectDetails>
      <Divider />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <StyledProjectTitle >
          Game Flow
        </StyledProjectTitle>
        <StyledProjectDesc style={{ margin: isMobile ? "50px 2vw" : "0 15%" }}>
          User can login by email, google or can continue as a guest and after
          login user can start the game. A random letter is shown to the user
          and user has a type a word starting from that letter in less than 5
          seconds and the game continues. User is not allowed to re-type the
          already used word and user failing to type the word in 5 seconds
          resulting in the game over.
        </StyledProjectDesc>
        <ProjectVideo
          muted
          loop
          playsInline
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1724795578/wordplay-desktop-user-flow_x6teb7.mkv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>
      </div>
      <Divider />
      {/* ==================Game features=============== */}

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <StyledProjectTitle>
          Game Features
        </StyledProjectTitle>
        <StyledProjectDesc style={{ margin: isMobile ? "50px 2vw" : "0 15%" }}>
          User's stats and updated after every game. Each point consists of the
          number of letters the typed word contains e:g if user enters dog for
          d, user will get 3 points for this word and so on. Leaderboards are
          also updated respectively.
        </StyledProjectDesc>
        <ProjectVideo
          muted
          loop
          playsInline
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1724796256/wordplay-desktop-game-feat_fxrws3.mkv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </ProjectVideo>
      </div>
    </motion.div>
  );
};
export default ProjectDetails;
