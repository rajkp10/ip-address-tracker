import React, { useContext } from "react";

export const API = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
