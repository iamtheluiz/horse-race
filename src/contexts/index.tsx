import React from "react";

import { DialogProvider } from "./dialog";
import { MoneyProvider } from "./money";
import { HorseProvider } from "./horse";

export const ApplicationProvider: React.FC = ({ children }) => {
  return (
    <DialogProvider>
      <MoneyProvider>
        <HorseProvider>
          {children}
        </HorseProvider>
      </MoneyProvider>
    </DialogProvider>
  );
};