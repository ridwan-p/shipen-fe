import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const KEY_USER = "user";
const INIT_USER = { username: "", token: "", name: "" };

export const AppContext = createContext({
  user: {},
});

const AppProvider = (props) => {
  const [user, setUser] = useState(INIT_USER);

  useEffect(() => {
    const user = localStorage.getItem(KEY_USER);
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = async () => {

  }

  const logout = () => {
    localStorage.removeItem(KEY_USER);
    setUser(INIT_USER);
  }

  const value = {
    user,
    logout,
    login
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider;