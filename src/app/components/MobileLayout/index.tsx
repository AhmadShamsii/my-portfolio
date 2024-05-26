import { Anchor } from "antd";
import React, { useEffect, useState } from "react";

const MobileLayout = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Part 1",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Part 2",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Part 3",
            },
          ]}
        />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "red",
          }}
        />
        <div
          id="part-2"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "green",
          }}
        />
        <div
          id="part-3"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "blue",
          }}
        />
      </div>
    </>
  );
};
export default MobileLayout;
