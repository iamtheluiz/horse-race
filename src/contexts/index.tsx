import React from "react";

import { DialogProvider } from "./dialog";
import { MoneyProvider } from "./money";
import { HorseProvider } from "./horse";

import Dialog from "../components/Dialog";

export const ApplicationProvider: React.FC = ({ children }) => {
  return (
    <DialogProvider>
      <MoneyProvider>
        <HorseProvider>
          <Dialog />
          {children}
        </HorseProvider>
      </MoneyProvider>
    </DialogProvider>
  );
};