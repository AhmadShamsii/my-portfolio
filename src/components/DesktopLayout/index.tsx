import React, { ReactNode } from "react";
import { Anchor, Col, Row } from "antd";
import { items } from "@/utils/helpers";

interface DesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  return (
    <Row>
      {/* <Col span={4}>
        <Anchor>
          {items.map((item) => (
            <Anchor.Link key={item.href} href={item.href} title={item.title} />
          ))}
        </Anchor>{" "}
      </Col>
      <Col span={20}>{children}</Col> */}
    </Row>
  );
};

export default DesktopLayout;
