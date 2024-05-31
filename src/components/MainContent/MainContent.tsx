import { Col } from "antd";
import { useMediaQuery } from "react-responsive";

const MainContent = ({ children }: any) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 800px)" });
  return <Col style={{padding: "5% 10%", background: "pink"}} span={isDesktop ? 20 : 24}>{children}</Col>;
};
export default MainContent;
