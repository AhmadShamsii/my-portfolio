import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dot,
  IPhoneX,
  Page,
  StyledContainer,
  Titlebar,
  VideoPlayer,
  VideoWrapper,
} from "../styles";
import wordplayImg from "./../../../../public/wordplay-desktop.png";
import { BouncingScrollText } from "@/app/projects/styles";
import { ArrowDownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { mobileBreakpoint } from "@/utils/constants";
import { useMediaQuery } from "react-responsive";

const ProjectImage = () => {
  const isMobile = useMediaQuery({ query: mobileBreakpoint });

  const [showText, setShowText] = useState(true);  // Local state to control visibility of the text

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 70 && showText) { // User has scrolled more than 50px
      setShowText(false); // Hide the text when the user scrolls down
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showText]);  // Only re-run the effect when showText changes
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
      <StyledContainer
      >
        <IPhoneX>
          <i>Speaker</i>
          <VideoWrapper>
            <VideoPlayer muted loop autoPlay playsInline preload="auto">
              <source
                src="https://res.cloudinary.com/dzxarcdmq/video/upload/v1738339322/wordplay_tvbgtz.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </VideoPlayer>
          </VideoWrapper>
        </IPhoneX>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }} >
          {!isMobile && <Page>
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
          </Page>}
          {showText && <BouncingScrollText>Scroll down for details! <ArrowDownOutlined /></BouncingScrollText>}
        </div>
      </StyledContainer>
    </motion.div>
  );
};
export default ProjectImage;
