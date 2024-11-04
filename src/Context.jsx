import React, { createContext, useContext, useState } from "react";

export const countcontext = createContext();

const value=(0)

export const Countprovider = ({ children }) => {
  const [count, setcount] = useState(value);
  return (
    <countcontext.Provider value={[ count, setcount ]}>
      {children}
    </countcontext.Provider>
  );
};

 