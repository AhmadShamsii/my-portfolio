import { colors } from "@/utils/colors";
import styled from "styled-components";

const StyledText = styled.p`
font-weight: 400;
font-size: 1vw;
  color: ${colors.lightgray};

`;
const StyledSpace = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const StyledTitle = styled.h3`
font-weight: 600;
margin-bottom: 0px;
`;
const StyledTitle2 = styled.h3`
margin-bottom: 0px;
font-weight: 400;
`;


export { StyledText, StyledSpace, StyledTitle, StyledTitle2 };
