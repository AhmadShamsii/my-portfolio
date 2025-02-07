import { colors } from "@/utils/colors";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import styled from "styled-components";

const StyledText = styled.p`
font-weight: 400;
 color: ${colors.lightgray};
    @media ${desktopBreakpoint} {
      font-size: 1vw;
    }
    @media ${tabletBreakpoint} {
      font-size: 1.8vw;
    }
    @media ${mobileBreakpoint} {
      font-size: 2.4vw;
    }
`;
const StyledSpace = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const StyledTitle = styled.h3`
font-weight: 600;
margin-bottom: 0px;

@media ${desktopBreakpoint} {
      font-size: 1.2vw;
    }
    @media ${tabletBreakpoint} {
      font-size: 1.8vw;
    }
    @media ${mobileBreakpoint} {
      font-size: 2.8vw;
    }
`;
const StyledTitle2 = styled.h3`
margin-bottom: 0px;
font-weight: 400;

@media ${desktopBreakpoint} {
      font-size: 1.2vw;
    }
    @media ${tabletBreakpoint} {
      font-size: 1.8vw;
    }
    @media ${mobileBreakpoint} {
      font-size: 2.5vw;
    }
`;


export { StyledText, StyledSpace, StyledTitle, StyledTitle2 };
