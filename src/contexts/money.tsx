import React, { createContext, useState, useContext } from "react";

interface MoneyContextProps {
  balance: number
}

const MoneyContext = createContext<MoneyContextProps | null>(null);

const MoneyProvider: React.FC = ({ children }) => {
  const [balance, setBalance] = useState(10);

  return (
    <MoneyContext.Provider value={{
      balance
    }}>
      {children}
    </MoneyContext.Provider>
  );
};

function useMoney(): MoneyContextProps {
  const context = useContext(MoneyContext);

  if (!context) {
    throw new Error("useMoney must be used within a MoneyProvider");
  }

  return context;
}

export { MoneyProvider, useMoney };
