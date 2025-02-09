import { desktopBreakpoint, largerDesktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from "@/utils/constants";
import styled from "styled-components";

export const IPhoneX = styled.div`
  position: relative;
  background-color: #7371ee;
  background-image: linear-gradient(60deg, #7371ee 1%, #a1d9d6 100%);
  border-radius: 20px;
  box-shadow: 0px 0px 0px 2px #1f1f1f, 0px 0px 0px 7px #191919,
    0px 0px 0px 2px #111;
    width: 170px;
    height: 300px;
    @media ${largerDesktopBreakpoint} {
      width: 120px;
    height: 220px;
    box-shadow: 0px 0px 0px 2px #1f1f1f, 0px 0px 0px 6px #191919,
    0px 0px 0px 2px #111;
    margin-bottom: 45px;
            }
            @media ${tabletBreakpoint} {
              width: 140px;
  height: 250px;
  box-shadow: 0px 0px 0px 2px #1f1f1f, 0px 0px 0px 5px #191919,
    0px 0px 0px 2px #111;
            }
            @media ${mobileBreakpoint} {
              width: 190px;
              height: 340px;
              box-shadow: 0px 0px 0px 2px #1f1f1f, 0px 0px 0px 7px #191919,
    0px 0px 0px 2px #111;
            }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    bottom: 7px;
    width: 80px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  &:before {
    top: -3px;
    width: 56%;
    height: 15px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }

  i,
  b,
  s,
  span {
    position: absolute;
    display: block;
    color: transparent;
  }

  i {
    top: -4px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 4px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }

  /* b {
    left: 10%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);
  } */

  b:after {
    content: "";
    position: absolute;
    background-color: #2d4d76;
    width: 6px;
    height: 6px;
    top: 3px;
    left: 3px;
    display: block;
    border-radius: 4px;
    box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
  }

  s {
    top: 50px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    width: 100%;
    font-size: 70px;
    font-weight: 100;
    padding-top: 60px;
  }

  span {
    bottom: 50px;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    left: 30px;
  }

  span + span {
    left: auto;
    right: 30px;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;

export const VideoPlayer = styled.video`
  width: auto;
  height: 101%;
  object-fit: cover; /* Ensures the video covers the entire area */
  border-radius: 23px;
`;

export const Page = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden; /* To ensure the image doesn't overflow the container */
  width: 700px;
    height: 400px;
    margin-left: 50px;

  @media ${largerDesktopBreakpoint} {
      width: 420px;
    height: 220px;
    margin-left: 20px;

            }

            @media ${tabletBreakpoint} {
              width: 450px;
              height: 250px;
    margin-left: 0px;

            }
            @media ${mobileBreakpoint} {
              width: 300px;
              height: 170px;
    margin-left: 0px;
            }
`;
export const StyledContainer = styled.div`
  min-height: 94vh;
          margin: 0px;
          padding: 0px;
          background-color: #FAFAFC;
          display: flex;
          align-items: flex-start;
          

            @media ${desktopBreakpoint} {
              display: flex;
          align-items: center;
          justify-content: center;
            }
            @media ${tabletBreakpoint} {
              display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px
            }
            @media ${mobileBreakpoint} {
              display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px
            }
`;

export const Titlebar = styled.div`
  background-color: #232222;
  height: 34px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #000000;
  display: inline-block;
  border-radius: 50%;

  &.close {
    background-color: #ef6866;
  }

  &.minimise {
    background-color: #f5ed49;
  }

  &.maximise {
    background-color: #89c665;
  }

  & + & {
    margin-left: 7px;
  }
`;
