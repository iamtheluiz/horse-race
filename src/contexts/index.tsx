import React from "react";

import { HorseProvider } from "./horse";
import { MoneyProvider } from "./money";

export const ApplicationProvider: React.FC = ({ children }) => {
  return (
    <MoneyProvider>
      <HorseProvider>
        {children}
      </HorseProvider>
    </MoneyProvider>
  );
};