import { colors } from "@/utils/colors";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import { Col } from "antd";

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
    font-size: 4vw;
  }
`;
const StyledNavItem = styled(Text) <{ selectedIndex: Number | null, index: Number }>`
  color: ${({ selectedIndex, index }) => (selectedIndex === index ? `${colors.darkgray}` : `${colors.lightgray}`)};
  font-weight: ${({ selectedIndex, index }) => (selectedIndex === index ? "normal" : "light")};
  cursor: pointer;
  font-family: "Kanit";

  &:hover {
    color: ${colors.darkgray};
  }

  @media ${desktopBreakpoint} {
    font-size: 1.25vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 2vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 3.5vw;
  }
`;


const StyledContainer = styled(Col) <{ isDesktop: boolean, isScrollingDown: boolean }>`
  position: ${({ isDesktop }) => (isDesktop ? "relative" : "fixed")};
  top: ${({ isScrollingDown, isDesktop }) => (isScrollingDown && !isDesktop ? "-80px" : "none")};  // Adjust 80px based on your header height
  border-right: ${({ isDesktop }) =>
    isDesktop ? "1px solid lightgray" : "none"};
  border-bottom: ${({ isDesktop }) =>
    isDesktop ? "none" : "1px solid lightgray"};
  min-height: ${({ isDesktop }) => (isDesktop ? "100vh" : "auto")};
  transition: ${({ isDesktop }) => (isDesktop ? "none" : "top 0.25s ease-in-out")};
z-index: 100;
`;

const ListItem = styled.li<{ selected: boolean }>`
  font-size: 18px;
  color: ${({ selected }) => (selected ? colors.black : colors.lightgray)};
  font-weight: ${({ selected }) => (selected ? "500" : "normal")};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: ${colors.darkgray};
  }

`;

const StyledSocialItem = styled.a`
color: ${colors.darkgray};
cursor: pointer;
font-size: 1.1vw;
font-family: "Kanit";
border-bottom: 1px solid gray;
width: fit-content;
display: block;
margin-bottom: 1vw;
&:hover {
    color: black;
    border-bottom: 1px solid black;
  }
`

export { StyledLogo, StyledNavItem, StyledContainer, ListItem, StyledSocialItem }