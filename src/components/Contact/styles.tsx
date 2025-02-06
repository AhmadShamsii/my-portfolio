import { colors } from "@/utils/colors";
import styled from "styled-components";

const StyledTitle = styled.p`
  font-family: "Kanit", sans-serif;
  color: ${colors.darkgray};
  font-weight: light;
  padding: 0px !important;
`;
const StyledText = styled.p`
  font-size: 1vw;
  font-family: "Kanit", sans-serif;
  color: ${colors.lightgray};
  font-weight: light;
`;

export { StyledTitle, StyledText };
