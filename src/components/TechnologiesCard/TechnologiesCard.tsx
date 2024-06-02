import { StyledText } from "@/app/page";
import { Col } from "antd";
import { StyledCard } from "../ProjectCard/styles";
import Image from "next/image";
import { colors } from "@/utils/colors";

interface TexhnologiesCardProps {
  logo: any;
  technology: string;
}
const TexhnologiesCard = ({ logo, technology }: TexhnologiesCardProps) => {
  return (
    <Col >
      <StyledCard style={{ width: "130px",  height: "150px" }} hoverable>
        <>
          <Image
            style={{
              width: "100%",
              height: "auto",
              padding: "0px",
            }}
            alt="react logo"
            src={logo}
          />
          <StyledText
            style={{
              textAlign: "center",
              paddingTop: 0,
              fontSize: "16px",
              fontWeight: "300",
              color: colors.darkgray,

              display:"flex",
              alignItems:"flex-end",
              justifyContent:"center"
          
            }}
          >
            {technology}
          </StyledText>
        </>
      </StyledCard>
    </Col>
  );
};
export default TexhnologiesCard;
