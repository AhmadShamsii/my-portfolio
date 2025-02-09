import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { usePathname, useRouter } from "next/navigation";
import { Divider, Space } from "antd";
import styled from "styled-components";
import "./../../app/global.css";
import { colors } from "@/utils/colors";
import { desktopBreakpoint, mobileBreakpoint } from "@/utils/constants";
import { ListItem, StyledContainer, StyledLogo, StyledNavItem, StyledSocialItem } from "./styles";

const List = styled.ul<{ isDesktop: boolean, isMobile: boolean }>`
  position: fixed;
  padding-left: ${({ isDesktop }) => (isDesktop ? "0" : "3.78%")};
  list-style-type: none;
  width: ${({ isDesktop }) => (isDesktop ? "auto" : "100%")};
  align-items: ${({ isDesktop }) => (isDesktop ? "start" : "center")};
  margin: ${({ isDesktop }) => (isDesktop ? "3% 0 0 20px" : "0 0 0 0")};
  z-index: 10;
  height: ${({ isMobile }) => (isMobile ? "30px" : "auto")};
  padding-top: ${({ isMobile }) => (isMobile ? "4px" : "0")};
  background-color: ${({ isDesktop }) => (!isDesktop ? colors.lightergray : "none")}; 
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
  -webkit-box-shadow: ${({ isDesktop }) => (!isDesktop ? "0px 1px 10px 0px rgba(0,0,0,0.22)" : "none")};  
-moz-box-shadow: ${({ isDesktop }) => (!isDesktop ? "0px 1px 10px 0px rgba(0,0,0,0.22)" : "none")}; 
box-shadow:  ${({ isDesktop }) => (!isDesktop ? "0px 1px 10px 0px rgba(0,0,0,0.22)" : "none")}; 
`;

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname()
  const isDesktop = useMediaQuery({ query: desktopBreakpoint });
  const isMobile = useMediaQuery({ query: mobileBreakpoint });

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        setIsScrollingDown(currentScrollY > lastScrollY);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);



  const items = [
    {
      key: "/about",
      label: (<StyledNavItem style={{ marginTop: isDesktop ? "6vh" : "0px" }}
        selectedIndex={selectedIndex}
        index={0}
      >About</StyledNavItem>),
    },
    {
      key: "/projects",
      label: (<StyledNavItem
        selectedIndex={selectedIndex}
        index={1}
      >Projects</StyledNavItem>),
    },
    {
      key: "contact",
      label: (<StyledNavItem
        selectedIndex={selectedIndex}
        index={2}
      >Contact</StyledNavItem>),
    },
  ];

  const handleClick = (index: number, item: any) => {
    setSelectedIndex(index);
    const absolutePath = item?.key?.startsWith("/") ? item.key : `/${item.key}`;
    router.push(absolutePath);
  };

  return (
    <StyledContainer isScrollingDown={isScrollingDown} isDesktop={isDesktop} span={isDesktop ? 4 : 24}>
      <List isDesktop={isDesktop} isMobile={isMobile}>
        <div style={{ display: "flex", flexDirection: isDesktop ? "column" : "row", justifyContent: "space-between", alignItems: isDesktop ? "flex-start" : "center" }}>
          <StyledLogo style={{ color: pathname == "/" ? `${colors.mediumgray}` : `${colors.lightgray}` }} onClick={() => { router.push("/"); setSelectedIndex(null) }}>Ahmad Shamsi</StyledLogo>
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
