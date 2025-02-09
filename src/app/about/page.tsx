"use client"
import Link from "next/link";
import { StyledTitle } from "../projects/styles";
import { StyledText } from "./styles";

const About = () => {
  return (
    <div style={{ marginTop: "2.5%", minHeight: "87vh" }}>
      <StyledTitle>About Me</StyledTitle>
      <StyledText>
        Hey there! I&#39;m an Electrical Engineering graduate who unexpectedly fell in love with coding after finishing college. My IT journey began with late-night study sessions and online courses, where I dived headfirst into the world of front-end development. After 7 months of persistence and lots of coffee, I landed my first job in tech – and there’s been no looking back since!
        <br />
        <br />
        <br />
        Beyond coding, I have a variety of hobbies that keep life interesting. I enjoy sharpening my strategic thinking with online chess matches (though winning is still a work in progress!) and losing myself in captivating TV series and movie marathons. I love the process of creating and constantly exploring new skills to add to my inventory.
        <br />
        <br />
        <br />
        I’m constantly learning and trying new things, whether it's exploring a new coding framework, building something cool, or testing my strategic skills on the chessboard. Life’s a journey, and I’m here for all the adventures, challenges, and late-night coding bugs it throws my way!
        <br />
        <br />
        <br />
        <span style={{ fontWeight: "400" }}>Interested in chess? Challenge me anytime @ <Link style={{ color: "black", borderBottom: "1px solid black" }} href="https://www.chess.com/member/ahmadshamsii" >Chess.com</Link> </span>
      </StyledText>
    </div>
  );
};

export default About;
