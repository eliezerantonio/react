import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionarUm() {
    setContar((contar) => contar + 1);
  }
  function adicionarDois() {
    setContar((contar) => contar + 2);
  }
  return (
    <GlobalContext.Provider value={{ contar, adicionarUm, adicionarDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
