// styles.ts
import { Card } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border: 1px solid #ced4da;
  color: #ffffffda;
  pointer-events: auto;
  transform: scale(1);
  opacity: 0.7;
  transition: all 250ms ease-in-out;
  display: flex;
  flex-direction: column;

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

  .description {
    font-size: 0.9rem;
  }

  &:nth-child(even) {
    transform: translateY(8px);
  }

  &:hover {
    transform: scale(1.05);
    z-index: 10;
    opacity: 1;
  }

`;

export { StyledCard };
