"use client";
import { StyledCard } from "@/components/ProjectCard/styles";
import { colors } from "@/utils/colors";
import { Flex, Tag } from "antd";
import { motion } from "framer-motion";
import router from "next/router";
import { StyledText } from "../page";
import monstarz from "./../../../public/monstarz.png";
import Image from "next/image";
import { UseSelector, useSelector } from "react-redux";
import { monstarzSelector } from "@/lib/features/projects/selectors";

const Monstarz = () => {
  const { monstarz } = useSelector(monstarzSelector);
  console.log(monstarz);
  const transition = { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] };

  return (
    <>
      <motion.div
        initial={{ y: "-50%" }}
        animate={{ y: 0, transition: { delay: 0.1, ...transition } }}
      >
        <motion.div>
          <Image
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              opacity: "0.75",
              border: "1px solid #ced4da",
            }}
            src={monstarz}
            alt={"imageAltText"}
          />
        </motion.div>
      </motion.div>
    </>
  );
};
export default Monstarz;
