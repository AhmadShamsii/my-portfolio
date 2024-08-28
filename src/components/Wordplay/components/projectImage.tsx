import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dot,
  IPhoneX,
  Page,
  Titlebar,
  VideoPlayer,
  VideoWrapper,
} from "../styles";
import wordplayImg from "./../../../../public/wordplay-desktop.png";

const ProjectImage = () => {
  return (
    <motion.div
      className="w-32 h-32 bg-blue-500 rounded-full"
      animate={{
        scale: [1, 1.1],
      }}
      transition={{
        duration: 0.5,
        repeatType: "mirror",
      }}
    >
      <div
        style={{
          minHeight: "96vh",
          margin: "0px",
          padding: "0px",
          backgroundColor: "#FAFAFC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IPhoneX>
          <i>Speaker</i>
          <VideoWrapper>
            <VideoPlayer muted loop autoPlay playsInline preload="auto">
              <source
                src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1724788905/wordplay_kooyad.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </VideoPlayer>
          </VideoWrapper>
        </IPhoneX>

        <Page>
          <Titlebar>
            <Dot className="close" />
            <Dot className="minimise" />
            <Dot className="maximise" />
          </Titlebar>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            src={wordplayImg}
            alt={"imageAltText"}
          />{" "}
        </Page>
      </div>
    </motion.div>
  );
};
export default ProjectImage;
