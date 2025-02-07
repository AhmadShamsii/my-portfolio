// styles.ts
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card) <{ isSmallDesktop: boolean }>`
  border: 1px solid #ced4da;
  color: #ffffffda;
  pointer-events: auto;
  transform: scale(1);
  opacity: 0.7;
  transition: all 250ms ease-in-out;
  display: flex;
  flex-direction: column;

  .ant-card-body {
    padding: ${({ isSmallDesktop }) => (isSmallDesktop ? "24px" : "12px")};
  }
  .card-title {
    position: relative;
    &::before {
      content: "";
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background-color: transparent;
      position: absolute;
      right: 0;
    }
  }

  .date {
    font-size: 0.95vw;
  }

  &:nth-child(even) {
    transform: translateY(8px);
  }

  &:hover {
    transform: scale(1.15);
    z-index: 10;
    opacity: 1;
  }

`;

const StyledYear = styled.div`
  @media ${desktopBreakpoint} {
    font-size: 0.9vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 1.5vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 2vw;
  }
`;
const StyledDescription = styled.div`
  @media ${desktopBreakpoint} {
    font-size: 1.1vw;
  }
  @media ${tabletBreakpoint} {
    font-size: 1.7vw;
  }
  @media ${mobileBreakpoint} {
    font-size: 2.2vw;
  }
`;

export { StyledCard, StyledYear, StyledDescription };
