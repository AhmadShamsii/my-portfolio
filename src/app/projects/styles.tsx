import { colors } from "@/utils/colors";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import styled, { keyframes } from "styled-components";

const StyledProjectDetails = styled.div`
  text-align: start;

  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 400;

  @media ${desktopBreakpoint} {
    margin: 5% 15%;
  }
  @media ${tabletBreakpoint} {
    margin: 5% 15%;
  }
  @media ${mobileBreakpoint} {
    margin: 5% 2vw;
  }
`;
const StyledProjectTitle = styled.div`
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 50px;

  @media ${desktopBreakpoint} {
    font-size: 3.5vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 4.5vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 6.5vw;
  }
`;
const StyledProjectDesc = styled.div`
  color: #a2a7a3;
  font-family: "Bricolage Grotesque", sans-serif;
  @media ${desktopBreakpoint} {
    font-size: 1.2vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 2vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 2.8vw;
  }
`;
const StyledProjectDetais = styled.div`
  @media ${desktopBreakpoint} {
    font-size: 1.2vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 2vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 2.8vw;
  }
`;
const ProjectProps = styled.div`
  @media ${desktopBreakpoint} {
    font-size: 1vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 1.8vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 2.5vw;
  }
`;
const ProjectVideo = styled.video`
 border-radius: 5px;
            opacity: 0.75;
            display: block;
            margin: 5% auto;
  @media ${desktopBreakpoint} {
    width: 70%;
    height: 70%;

  }
  @media ${tabletBreakpoint} {
    width: 80%;
    height: 80%;

  }
  @media ${mobileBreakpoint} {
    width: 90%;
    height: 90%;

  }
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

const bounce = keyframes`
  0% {
    text-shadow: 
      0 1px 1px rgba(0, 0, 0, 0.5);  
  }
  100% {
    transform: translateY(-5px);
  }
`;

const BouncingScrollText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.lightgray};
  padding-top: 30px;
  text-align: center;
  font-size: 12px;
  animation: ${bounce} 0.7s ease infinite alternate;
  opacity: 0.5;
`;

export {
  StyledProjectTitle, StyledProjectDetails, StyledProjectDesc, StyledTitle, StyledSubTitle,
  BouncingScrollText, StyledProjectDetais, ProjectProps, ProjectVideo
};
