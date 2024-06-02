import { StyledText } from "@/app/page";
import { Col } from "antd";
import { StyledCard } from "../ProjectCard/styles";
import Image from "next/image";
import { colors } from "@/utils/colors";

// interface TexhnologiesCardProps {
//   logo: any;
//   technology: string;
// }

const TexhnologiesCard = ({technologies}: any) => {
  return (
    <Col style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
      {technologies?.map((item: any) => (
        <StyledCard style={{ width: "130px", height: "150px" }} hoverable>
          <>
            <Image
              style={{
                width: "100%",
                height: "auto",
                padding: "0px",
              }}
              alt="react logo"
              src={item.logo}
            />
            <StyledText
              style={{
                textAlign: "center",
                paddingTop: 0,
                fontSize: "16px",
                fontWeight: "300",
                color: colors.darkgray,

                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {item.technology}
            </StyledText>
          </>
        </StyledCard>
      ))}
    </Col>
  );
};
export default TexhnologiesCard;
