import { colors } from "@/utils/colors";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import styled from "styled-components";

const StyledText = styled.p`
   font-weight: 200;
   color: ${colors.darkgray};
   margin-top: 50px;
       @media ${desktopBreakpoint} {
         font-size: 1.2vw;
         margin: 0 20vw;
       }
       @media ${tabletBreakpoint} {
         font-size: 1.8vw;
        margin: 0 10vw;
       }
       @media ${mobileBreakpoint} {
         font-size: 2.5vw;
         margin: 0 5vw;
       }
`;
export { StyledText }