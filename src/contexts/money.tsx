import React, { createContext, useState, useContext } from "react";

interface MoneyContextProps {
  bet: number;
  setBet: (bet: number) => void;
  balance: number;
  setBalance: (balance: number) => void;
}

const MoneyContext = createContext<MoneyContextProps | null>(null);

const MoneyProvider: React.FC = ({ children }) => {
  const [balance, setBalance] = useState(10);
  const [bet, setBet] = useState(1);

  return (
    <MoneyContext.Provider value={{
      bet,
      setBet,
      balance,
      setBalance,
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
