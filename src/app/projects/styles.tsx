import { colors } from "@/utils/colors";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
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
   color: ${colors.lightgray};
  font-family: "Kanit", sans-serif;
  margin-bottom: 3vh;

    @media ${desktopBreakpoint} {
      font-size: 2vw;
    }
    @media ${tabletBreakpoint} {
      font-size: 2.5vw;
    }
    @media ${mobileBreakpoint} {
      font-size: 3.5vw;
    }
`;
const StyledSubTitle = styled.h1`
  font-weight: 200;
  font-size: 35px;
   color: ${colors.lightgray};
  font-family: "Bricolage Grotesque", sans-serif;
  text-align: center;

    @media ${desktopBreakpoint} {
    font-size: 2vw;
    margin-bottom: 3vh;
  }
  @media ${tabletBreakpoint} {
    font-size: 2.8vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 3.5vw;
  }
`;

export { StyledProjectTitle, StyledProjectDetails, StyledProjectDesc, StyledTitle, StyledSubTitle };
