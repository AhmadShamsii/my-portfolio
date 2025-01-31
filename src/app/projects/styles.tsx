import { colors } from "@/utils/colors";
import styled from "styled-components";

const StyledProjectDetails = styled.div`
  text-align: start;
  margin: 5% 15%;
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 400;
`;
const StyledProjectTitle = styled.div`
  font-size: 56px;
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
`;
const StyledProjectDesc = styled.div`
  font-size: 18px;
  color: #a2a7a3;
  font-family: "Bricolage Grotesque", sans-serif;
`;
const StyledTitle = styled.h1`
font-weight: 200;
  font-size: 2vw;
   color: ${colors.lightgray};
  font-family: "Kanit", sans-serif;
  margin-bottom: 3vh;
`;
const StyledSubTitle = styled.h1`
font-weight: 200;
  font-size: 35px;
   color: ${colors.lightgray};
  font-family: "Bricolage Grotesque", sans-serif;
  margin-bottom: 3vh;
  text-align: center;
`;

export { StyledProjectTitle, StyledProjectDetails, StyledProjectDesc, StyledTitle, StyledSubTitle };
