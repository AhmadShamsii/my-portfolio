import { Col } from "antd";
import { useMediaQuery } from "react-responsive";
import Footer from "../Footer/Footer";
import { desktopBreakpoint } from "@/utils/constants";

const MainContent = ({ children }: any) => {
  const isDesktop = useMediaQuery({ query: desktopBreakpoint });
  return (
    <Col style={{ padding: isDesktop ? "1% 3.78%" : "7.5% 3.78%" }} span={isDesktop ? 20 : 24}>
      {children}
      <Footer />
    </Col>

  );
};
export default MainContent;
