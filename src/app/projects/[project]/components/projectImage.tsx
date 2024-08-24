import { motion } from "framer-motion";
import Image from "next/image";

const ProjectImage = ({ getImage }: any) => {
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
        }}
      >
        {/* <video
          muted
          loop
          playsInline
          style={{
            borderRadius: "5px",
            width: "70%",
            height: "70%",
            opacity: "0.75",
            paddingTop: "10%",
            display: "block",
            margin: "0px auto",
          }}
          // controls
          autoPlay
        >
          <source src="/videos/monstarzvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Image
          style={{
            borderRadius: "5px",
            width: "70%",
            height: "70%",
            opacity: "0.75",
            paddingTop: "10%",
            display: "block",
            margin: "0px auto",
          }}
          src={getImage}
          alt={"imageAltText"}
        />
      </div>
    </motion.div>
  );
};
export default ProjectImage;
