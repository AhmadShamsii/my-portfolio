import React, { ReactNode } from "react";
import { Anchor, Col, Row } from "antd";
import Link from "next/link";

interface DesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children, items }:any) => {
  return (
    <Row>
      <Col span={4}>
        <Anchor items={items} />
      </Col>
      <Col span={20}>{children}</Col>
    </Row>
  );
};

export default DesktopLayout;
