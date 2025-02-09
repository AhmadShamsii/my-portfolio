import { useMediaQuery } from "react-responsive";
import Footer from "../Footer/Footer";
import { desktopBreakpoint } from "@/utils/constants";
import { StyledCol } from "./styles";

const MainContent = ({ children }: any) => {
  const isDesktop = useMediaQuery({ query: desktopBreakpoint });
  return (
    <StyledCol span={isDesktop ? 20 : 24}>
      {children}
      <Footer />
    </StyledCol>

  );
};
export default MainContent;
