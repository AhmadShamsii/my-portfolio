import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { Col, Divider } from "antd";
import styled from "styled-components";
import "./../../app/global.css";
import { colors } from "@/utils/colors";
import Image from "next/image";
import logo from "./../../../public/logo.svg";

const StyledContainer = styled(Col)<{ isDesktop: boolean }>`
  position: relative;
  border-right: ${({ isDesktop }) =>
    isDesktop ? "1px solid lightgray" : "none"};
  border-bottom: ${({ isDesktop }) =>
    isDesktop ? "none" : "1px solid lightgray"};
  height: ${({ isDesktop }) => (isDesktop ? "100vh" : "auto")};
`;

const List = styled.ul<{ isDesktop: boolean }>`
  position: fixed;

  list-style-type: none;
  padding: 0;
  display: flex;
  margin: ${({ isDesktop }) => (isDesktop ? "3% 0 0 20px" : "0%")};
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
`;

const ListItem = styled.li<{ selected: boolean; isLogo: boolean }>`
  padding: ${({ isLogo }) => (isLogo ? "0" : "10px 15px")};
  margin: ${({ isLogo }) => (isLogo ? "0" : "5px 0")};
  margin-top: 5px;
  padding-top: 10px;
  font-size: 18px;
  color: ${({ selected }) => (selected ? colors.black : colors.lightgray)};
  font-weight: ${({ selected }) => (selected ? "500" : "normal")};
  cursor: ${({ isLogo }) => (isLogo ? "default" : "pointer")};
  transition: background-color 0.3s ease;
  &:hover {
    color: ${({ isLogo }) => (isLogo ? "inherit" : colors.darkgray)};
  }
`;

const NavBar = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });

  const items = [
    {
      key: "/",
      label: (
        <Image
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "80%", height: "auto", margin: "7px auto" }}
          alt="Ahmad Shamsi"
          src={logo}
        />
      ),
    },

    {
      key: "about",
      label: "About",
    },
    {
      key: "projects",
      label: "Projects",
    },
    {
      type: "divider",
    },
    {
      key: "contact",
      label: "Contact",
    },
  ];

  const handleClick = (index: number, item: any) => {
    setSelectedIndex(index);
    router.push(item.key);
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
      </List>
    </StyledContainer>
  );
};
export default NavBar;
