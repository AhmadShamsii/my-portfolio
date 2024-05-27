// components/MobileLayout.tsx
import React, { ReactNode } from "react";
import { Anchor } from "antd";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  items,
}: any) => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Anchor items={items} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MobileLayout;
