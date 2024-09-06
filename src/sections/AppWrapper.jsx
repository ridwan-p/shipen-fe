import { Outlet } from "react-router-dom";
import SidebarWrapper from "./SidebarWrapper";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./AppWrapper.module.css";
import HeaderWrapper from "./HeaderWrapper";
import AppProvider from "../providers/AppProvider";

const AppWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const previousWidth = useRef(null);

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth.current <= widthLimit;

    if (isMobile !== wasMobile) {
      setIsOpen(!isMobile);
    }

    previousWidth.current = width;
  }

  const hanldleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <AppProvider>
      <div className={styles['app-wrapper']}>
        <SidebarWrapper isOpen={isOpen} toggle={hanldleToggle} />
        <div className={classNames(styles['content-wrapper'], { [styles['is-open']]: isOpen })}>
          <HeaderWrapper toggle={hanldleToggle} />
          <div className="px-4">
            <Outlet />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default AppWrapper;