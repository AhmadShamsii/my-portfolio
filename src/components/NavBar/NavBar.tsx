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
  padding-left: ${({ isDesktop }) => (isDesktop ? "0" : "3.78%")};
  list-style-type: none;
  /* display: flex; */
  width: ${({ isDesktop }) => (isDesktop ? "auto" : "100%")};
  align-items: ${({ isDesktop }) => (isDesktop ? "start" : "center")};
  /* justify-content: space-between; */
  margin: ${({ isDesktop }) => (isDesktop ? "3% 0 0 20px" : "0 0 0 0")};
  z-index: 10;
  background-color: ${({ isDesktop }) => (!isDesktop ? colors.lightergray : "none")}; 
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
  -webkit-box-shadow: ${({ isDesktop }) => (!isDesktop ? "0px 1px 10px 0px rgba(0,0,0,0.22)" : "none")};  
-moz-box-shadow: ${({ isDesktop }) => (!isDesktop ? "0px 1px 10px 0px rgba(0,0,0,0.22)" : "none")}; 
box-shadow:  ${({ isDesktop }) => (!isDesktop ? "0px 1px 10px 0px rgba(0,0,0,0.22)" : "none")}; 
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

const StyledLogo = styled.h2`
color: ${colors.lightgray};
cursor: pointer;
font-weight: 400;
font-family: "Kanit"; 
font-size: 2vw;
`

const StyledNavItem = styled.p<{ isDesktop: boolean }>`
color: ${colors.lightgray};
cursor: pointer;
font-size: 1.2vw;
font-family: "Kanit";
margin-top: ${({ isDesktop }) => (!isDesktop ? "0px" : "20px")};  
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
      key: "/about",
      label: (<StyledNavItem isDesktop={isDesktop}>About</StyledNavItem>),
    },
    {
      key: "/projects",
      label: (<StyledNavItem isDesktop={isDesktop}>Projects</StyledNavItem>),
    },
    {
      key: "contact",
      label: (<StyledNavItem isDesktop={isDesktop}>Contact</StyledNavItem>),
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
        <div style={{ display: "flex", flexDirection: isDesktop ? "column" : "row", justifyContent: "space-between" }}>
          <StyledLogo onClick={() => router.push("/")}>Ahmad Shamsi</StyledLogo>
          <div style={{ display: "flex", flexDirection: isDesktop ? "column" : "row", paddingRight: "3.78%", gap: "30px" }} >
            {items?.map((item, index) => (
              <ListItem
                key={index}
                selected={index === selectedIndex}
                onClick={() => handleClick(index, item)}
              >
                {item?.label}
              </ListItem>
            ))}
          </div>
        </div>
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
