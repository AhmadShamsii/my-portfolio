import { colors } from "@/utils/colors";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";

const Text = Typography;

const StyledLogo = styled(Text)`
color: ${colors.lightgray};
cursor: pointer;
font-weight: 400;
font-family: "Kanit"; 
  @media ${desktopBreakpoint} {
    font-size: 2vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 2.5vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 3vw;
  }
`;
const StyledNavItem = styled(Text)`
color: ${colors.lightgray};
cursor: pointer;
font-family: "Kanit";
margin-top:0px;  
  @media ${desktopBreakpoint} {
    font-size: 1.25vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 2vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 3vw;
  }
`;

export { StyledLogo, StyledNavItem }