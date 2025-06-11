"use client";
import MainContent from "@/components/MainContent/MainContent";
import NavBar from "@/components/NavBar/NavBar";
import "./../app/global.css";
import { useMediaQuery } from "react-responsive";
import { Row } from "antd";
import { useEffect, useState } from "react";
import { desktopBreakpoint } from "@/utils/constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ query: desktopBreakpoint });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {isMounted &&
          (isDesktop ? (
            <Row>
              <NavBar />
              <MainContent>{children}</MainContent>
            </Row>
          ) : (
            <div>
              <NavBar />
              <MainContent>{children}</MainContent>
            </div>
          ))}
      </body>
    </html>
  );
}
