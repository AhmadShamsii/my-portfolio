import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import { Col } from "antd";
import styled from "styled-components";
import "./../../app/global.css";
import { colors } from "@/utils/colors";
const List = styled.ul<{ isDesktop: boolean }>`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  text-align: start;
  padding-top: 25%;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "column" : "row")};
`;

const ListItem = styled.li<{ selected: boolean }>`
  padding: 10px 15px;
  margin: 5px 0;
  color: ${({ selected }) => (selected ? colors.black :colors.lightgray)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: ${colors.darkgray};
  }
`;

const NavBar = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });

  const items = [
    {
      key: "/",
      label: "Logo",
    },
    {
      type: "divider",
    },
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
