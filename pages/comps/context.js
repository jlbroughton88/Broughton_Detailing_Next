import React, { useState, useEffect, useContext, createContext } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = props => {
  const [statusUrl, setStatusUrl] = useState("");

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("development")
    } else {
      setStatusUrl("http://broughtondetailing.com");
    }
  }, [statusUrl]);

  const config = {
    statusUrl
  };

  return (
    <AppContext.Provider value={config}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
