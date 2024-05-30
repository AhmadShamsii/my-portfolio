import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import {  Col } from "antd";
import styled from "styled-components";
import "./../../app/global.css";

const List = styled.ul<{ isDesktop: boolean }>`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
`;

const ListItem = styled.li<{ selected: boolean }>`
  padding: 10px 15px;
  margin: 5px 0;
  color: ${({ selected }) => (selected ? "#4B4E56" : "#888888")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: #3f3e3e;
  }
`;

const NavBar = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' })


  const items = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "about",
      label: "About",
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
    <Col span={4}>
      <List isDesktop={isDesktop}>
        {items?.map((item, index) => (
          <ListItem
            key={index}
            selected={index === selectedIndex}
            onClick={() => handleClick(index, item)}
          >
            {item?.label}
          </ListItem>
        ))}
      </List>
    </Col>
  );
};
export default NavBar;
