import { colors } from "@/utils/colors";
import styled from "styled-components";
import Typography from "antd/es/typography/Typography";
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";

const Text = Typography;

const StyledText = styled(Text)`
  font-family: "Kanit", sans-serif;
  font-weight: 200;
  font-style: normal;
  color: ${colors.lightgray};

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
const StyledDesc = styled(Text)`
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  color: ${colors.darkgray};
  background-image: linear-gradient(
    90deg,
    #7e8188 0%,
    #404246 50%,
    #404246 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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

export { StyledText, StyledDesc }