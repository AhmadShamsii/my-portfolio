"use client";
import React from "react";
import MobileLayout from "@/components/MobileLayout";
import DesktopLayout from "@/components/DesktopLayout";
import "./../../app/global.css";
import { isMobileView } from "@/utils/constants";

const Layout = ({ children }:any) => {
  return (
    <div>
      {isMobileView ? (
        <MobileLayout children={children} />
      ) : (
        <DesktopLayout children={children} />
      )}
    </div>
  );
};

export default Layout;
