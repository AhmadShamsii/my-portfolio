import { Col } from "antd";
import { useMediaQuery } from "react-responsive";

const MainContent = ({ children }: any) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
  return (
    <Col style={{ padding: "1% 3.78%" }} span={isDesktop ? 20 : 24}>
      {children}
    </Col>
  );
};
export default MainContent;
