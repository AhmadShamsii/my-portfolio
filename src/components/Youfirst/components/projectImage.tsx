import { motion } from "framer-motion";
import Image from "next/image";
import youfirst from "./../../../../public/youfirst.png";
import { mobileBreakpoint } from "@/utils/constants";
import { useMediaQuery } from "react-responsive";
import { BouncingScrollText } from "@/app/projects/styles";
import { ArrowDownOutlined, DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

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
      <div
        style={{
          minHeight: "94vh",
          margin: "0px",
          padding: "0px",
          backgroundColor: "#FAFAFC",
        }}
      >
        <Image
          style={{
            borderRadius: "5px",
            width: isMobile ? "80%" : "70%",
            height: "70%",
            opacity: "0.75",
            paddingTop: "20vh",
            display: "block",
            margin: "0px auto",
          }}
          src={youfirst}
          alt={"imageAltText"}
        />
        {showText && <BouncingScrollText>Scroll down for details! <ArrowDownOutlined /></BouncingScrollText>}
      </div>
    </motion.div>
  );
};
export default ProjectImage;
