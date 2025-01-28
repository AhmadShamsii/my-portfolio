import { colors } from "@/utils/colors";
import styled from "styled-components";

const StyledTitle = styled.p`
  font-size: 16px;
  font-family: "Kanit", sans-serif;
  color: ${colors.darkgray};
  font-weight: light;
  margin-top: 20px;
`;
const StyledText = styled.p`
  font-size: 14px;
  font-family: "Kanit", sans-serif;
  color: ${colors.lightgray};
  font-weight: light;
  margin-top: 20px;
`;

export { StyledTitle, StyledText };
