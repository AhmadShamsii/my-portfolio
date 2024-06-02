import Image from "next/image";
import { StyledCard } from "./styles";
import { Flex, Tag } from "antd";
import { colors } from "@/utils/colors";
import { StyledText } from "@/app/page";

const ProjectCard = ({
  imageSrc,
  imageAltText,
  projectTitle,
  projectDesc,
  projectYear,
  tags,
}: any) => {
  return (
    <>
      <StyledCard hoverable>
        <Image
          style={{
            width: "100%",
            height: "100%",
            opacity: "0.75",
            border: "1px solid #ced4da",
          }}
          src={imageSrc}
          alt={imageAltText}
        />
      </StyledCard>
      <Flex
        gap={20}
        style={{ margin: " 2% 3.5% 1%  3.5%", color: colors.black }}
        justify="space-between"
      >
        <StyledText style={{ fontSize: "16px" }}>
          <span style={{ fontWeight: "300" }}> {projectTitle}</span> -{" "}
          {projectDesc}
        </StyledText>
        <StyledText style={{ fontSize: "16px", minWidth: "35px" }}>
          {projectYear}
        </StyledText>
      </Flex>
      <Flex style={{ marginLeft: "3.5%" }} gap="8px" wrap>
        {tags?.map((item: any) => (
          <Tag color={item.color}>{item?.tag}</Tag>
        ))}
      </Flex>
    </>
  );
};
export default ProjectCard;
