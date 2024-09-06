import Sidebar from "../components/Sidebar"
import config from "../configs/sidebar";
import PropsTypes from "prop-types"
import logo from "../assets/images/shipen-logo.svg"
import { useLocation } from "react-router-dom";

const SidebarWrapper = (props) => {
  const location = useLocation();
  return (
    <Sidebar
      isOpen={props.isOpen}
      brand={{ title: "Shipen", desc: "Dashboard Management" }}
      logo={logo}
      toggle={props.toggle}
      items={config}
      pathname={location.pathname}
    />
  )
}

SidebarWrapper.propTypes = {
  isOpen: PropsTypes.bool,
  toggle: PropsTypes.func,
};


export default SidebarWrapper;