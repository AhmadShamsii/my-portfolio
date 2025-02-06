// ProjectCard.tsx
import Image from "next/image";
import { StyledCard } from "./styles";
import { Flex, Tag } from "antd";
import { colors } from "@/utils/colors";
import { StyledText } from "@/app/page";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { desktopBreakpoint } from "@/utils/constants";
import { useMediaQuery } from "react-responsive";

interface ProjectCardProps {
  imageSrc: any;
  imageAltText: string;
  projectTitle: string;
  projectDesc: string;
  projectYear: string;
  tags: any[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAltText,
  projectTitle,
  projectDesc,
  projectYear,
  tags,
}) => {
  const router = useRouter();
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const isSmallDesktop = useMediaQuery({ query: desktopBreakpoint });

  const project = projectTitle.toLocaleLowerCase();
  return (
    <>
      <StyledCard isSmallDesktop={isSmallDesktop}>
        <motion.div
          whileHover={{ scaleX: 1.02, scaleY: 1.03 }}
          transition={transition}
        >
          <Image
            onClick={() => router.push(`projects/${project}`)}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
              opacity: "0.85",
              border: "1px solid #ced4da",
              cursor: "pointer",
            }}
            src={imageSrc}
            alt={imageAltText}
          />
        </motion.div>
        <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
          <div className="card-title">
            <StyledText style={{ fontSize: isSmallDesktop ? "1.15vw" : "1.8vw" }}>
              <span style={{ fontWeight: "300" }}>{projectTitle}</span>
            </StyledText>
          </div>
          <div style={{ fontSize: isSmallDesktop ? "0.8vw" : "1.3vw" }}>{projectYear}</div>
        </div>
        <div style={{ fontSize: isSmallDesktop ? "1vw" : "1.5vw" }}>{projectDesc}</div>
      </StyledCard>
      {/* <Flex style={{ marginLeft: "3.5%" }} gap="8px" wrap>
        {tags?.map((item: any) => (
          <Tag color={item.color} key={item?.tag}>
            {item?.tag}
          </Tag>
        ))}
      </Flex> */}
    </>
  );
};

export default ProjectCard;
