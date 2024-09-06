import { useContext, useState } from "react";
import Header from "../components/Header";
import PropsTypes from "prop-types";
import ModalLogin from "../components/Modal/ModalLogin";
import { AppContext } from "../providers/AppProvider";

const HeaderWrapper = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const appProvider = useContext(AppContext);


  const handleLogin = async (data) => {
    setLoading(true);
    try {
      // hit api login
      await appProvider.login(data)
      setLoading(false);
      setShowLogin(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const handleLogout = () => {
    appProvider.logout();
  }

  return (
    <>
      <Header
        onClickLogin={() => { setShowLogin(true) }}
        onClickLogout={handleLogout}
        isLogin={appProvider.user?.token !== ""}
        username={appProvider.user.name}
        toggle={props.toggle}
      />
      <ModalLogin
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
        isLoading={loading}
        show={showLogin}
      />
    </>
  );
}

HeaderWrapper.propTypes = {
  toggle: PropsTypes.func
}
export default HeaderWrapper;
