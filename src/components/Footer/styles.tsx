import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import styled from "styled-components";

const StyledContainer = styled.div`
position: relative;
bottom: 10px;
`;
const StyledText = styled.p`
display: flex;
align-items: center; 
gap:10px;

@media ${desktopBreakpoint} {
    font-size: 1.05vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 1.8vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 3vw;
  }
`;
const StyledSpace = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;


export { StyledText, StyledSpace, StyledContainer };
