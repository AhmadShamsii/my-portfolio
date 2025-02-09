import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import { Col } from "antd";
import styled from "styled-components";

const StyledCol = styled(Col)`
  @media ${desktopBreakpoint} {
    padding: 1% 3.78%;

  }
  @media ${tabletBreakpoint} {
    padding: 7.5% 3.78%;

  }
  @media ${mobileBreakpoint} {
    padding: 10% 3.78%;

  }
`;
export { StyledCol }