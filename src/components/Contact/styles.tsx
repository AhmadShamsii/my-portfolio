import { colors } from "@/utils/colors";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import { Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const StyledContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap:5vw;
  @media ${desktopBreakpoint} {
    font-size: 1.25vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 2vw;
  }
  @media ${mobileBreakpoint} {
    grid-template-columns: 1fr;
  }
`;

const StyledTitle = styled.p`
  font-family: "Kanit", sans-serif;
  color: ${colors.darkgray};
  font-weight: light;
  padding: 0px !important;
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
const StyledText = styled.p`
  font-size: 1vw;
  font-family: "Kanit", sans-serif;
  color: ${colors.lightgray};
  font-weight: light;
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

const StyledButton = styled(Button)`
border-bottom: 1px solid gray;
@media ${desktopBreakpoint} {
    font-size: 1.25vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 2vw;
padding: 5px 0;

  }
  @media ${mobileBreakpoint} {
    font-size: 2.5vw;
padding: 5px 0;

  }
`;
const StyledLink = styled(Link)`
  position: relative;
  top: 0;
  transition: top ease 0.2s;
  &:hover {
    top:-3px
  }
`;
export { StyledTitle, StyledText, StyledContainer, StyledButton, StyledLink };
