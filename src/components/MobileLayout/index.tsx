// components/MobileLayout.tsx
import React, { ReactNode } from "react";
import { Anchor } from "antd";
import { items } from "@/utils/helpers";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <div style={{ padding: "20px" }}>
        <Anchor direction="horizontal">
          {items.map((item) => (
            <Anchor.Link key={item.href} href={item.href} title={item.title} />
          ))}
        </Anchor>{" "}
      </div>
      <div>{children}</div> */}
    </>
  );
};

export default MobileLayout;
