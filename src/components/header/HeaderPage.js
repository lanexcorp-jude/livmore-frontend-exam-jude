import { Grid } from "antd";
import MobileHeaderComponent from "./MobileHeaderComponent";
import HeaderComponent from "./HeaderComponent";

const { useBreakpoint } = Grid;

const HeaderPage = () => {
  const screens = useBreakpoint();
  const isMobile = screens.lg === false;

  return isMobile ? <MobileHeaderComponent /> : <HeaderComponent />;
};

export default HeaderPage;
