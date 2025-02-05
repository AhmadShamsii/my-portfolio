import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { Col, Divider, Space } from "antd";
import styled from "styled-components";
import "./../../app/global.css";
import { colors } from "@/utils/colors";
import { desktopBreakpoint } from "@/utils/constants";

const StyledContainer = styled(Col) <{ isDesktop: boolean }>`
  position: relative;
  border-right: ${({ isDesktop }) =>
    isDesktop ? "1px solid lightgray" : "none"};
  border-bottom: ${({ isDesktop }) =>
    isDesktop ? "none" : "1px solid lightgray"};
  min-height: ${({ isDesktop }) => (isDesktop ? "100vh" : "auto")};
`;

const List = styled.ul<{ isDesktop: boolean }>`
  position: fixed;

  list-style-type: none;
  padding: 0;
  display: flex;
  width: ${({ isDesktop }) => (isDesktop ? "auto" : "100%")};
  align-items: ${({ isDesktop }) => (isDesktop ? "start" : "end")};
  justify-content: center;
  margin: ${({ isDesktop }) => (isDesktop ? "3% 0 0 20px" : "0 0 0 0")};
  z-index: 10;
  background-color: ${({ isDesktop }) => (!isDesktop ? colors.lightergray : "none")}; 
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
  -webkit-box-shadow: ${({ isDesktop }) => (!isDesktop ? "0px 5px 18px -3px rgba(0,0,0,0.7)" : "none")};  
-moz-box-shadow: ${({ isDesktop }) => (!isDesktop ? "0px 5px 18px -3px rgba(0,0,0,0.7)" : "none")}; 
box-shadow:  ${({ isDesktop }) => (!isDesktop ? "0px 5px 18px -3px rgba(0,0,0,0.7)" : "none")}; 
`;

const ListItem = styled.li<{ selected: boolean; isLogo: boolean }>`
  margin: ${({ isLogo }) => (isLogo ? "0" : "5px 0")};
  font-size: 18px;
  color: ${({ selected }) => (selected ? colors.black : colors.lightgray)};
  font-weight: ${({ selected }) => (selected ? "500" : "normal")};
  cursor: ${({ isLogo }) => (isLogo ? "default" : "pointer")};
  transition: background-color 0.3s ease;
  &:hover {
    color: ${({ isLogo }) => (isLogo ? "inherit" : colors.darkgray)};
  }
`;

const StyledLogo = styled.h2`
color: ${colors.lightgray};
cursor: pointer;
font-weight: 400;
font-family: "Kanit"; 
font-size: 2vw;
`

const StyledNavItem = styled.p`
color: ${colors.lightgray};
cursor: pointer;
font-size: 1.2vw;
font-family: "Kanit";
margin-top: 1.2vw;
`
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

const NavBar = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isDesktop = useMediaQuery({ query: desktopBreakpoint });

  const items = [
    {
      key: "/",
      label: (
        <StyledLogo>Ahmad Shamsi</StyledLogo>
        // <Image
        //   width="0"
        //   height="0"
        //   sizes="100vw"
        //   style={{
        //     width: "80%",
        //     height: "auto",
        //     margin: "7px auto",
        //     cursor: "pointer",
        //   }}
        //   alt="Ahmad Shamsi"
        //   src={logo}
        // />
      ),
    },

    {
      key: "/about",
      label: (<StyledNavItem>About</StyledNavItem>),
    },
    {
      key: "/projects",
      label: (<StyledNavItem>Projects</StyledNavItem>),
    },
    {
      key: "contact",
      label: (<StyledNavItem>Contact</StyledNavItem>),
    },
  ];

  const handleClick = (index: number, item: any) => {
    setSelectedIndex(index);
    const absolutePath = item?.key?.startsWith("/") ? item.key : `/${item.key}`;
    router.push(absolutePath);
  };
  return (
    <StyledContainer isDesktop={isDesktop} span={isDesktop ? 4 : 24}>
      <List isDesktop={isDesktop}>
        {items?.map((item, index) => (
          <ListItem
            key={index}
            selected={index === selectedIndex}
            isLogo={item.key === "/"}
            onClick={() => handleClick(index, item)}
          >
            {item?.label}
          </ListItem>
        ))}
        {isDesktop && (<> <Divider />
          <Space direction="vertical" >
            <StyledSocialItem target="_blank" href="https://github.com/AhmadShamsii">Github</StyledSocialItem>
            <StyledSocialItem target="_blank" href="https://www.linkedin.com/in/ahmadshamsii/">Linkedin</StyledSocialItem>
            <StyledSocialItem href="mailto:ahmaddshamsii@gmail.com">Email</StyledSocialItem>
            <StyledSocialItem rel="noopener noreferrer" target="_blank" href="/resume.pdf" >Resume</StyledSocialItem>
          </Space></>)}
      </List>

    </StyledContainer>
  );
};
export default NavBar;
