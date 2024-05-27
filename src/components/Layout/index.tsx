"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AppProps } from "next/app";
import MobileLayout from "@/components/MobileLayout";
import DesktopLayout from "@/components/DesktopLayout";
import Link from "next/link";

function Layout({ children }: any) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMobile, setIsMobile] = useState(window?.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items=[
    {
      key: "part-1",
      href: "#part-1",
      title: <Link href="about">Part 1</Link>,
    },
    {
      key: "part-2",
      href: "#part-2",
      title: <Link href="page1">Part 2</Link>,
    },
    {
      key: "part-3",
      href: "#part-3",
      title: <Link href="page1">Part 3</Link>,
    },
  ]

  return (
    <div>
      {isMobile ? (
        <MobileLayout children={children} items={items} />
      ) : (
        <DesktopLayout children={children} items={items}/>
      )}
    </div>
  );
}

export default Layout;
