import React from "react";
import { createContext, useState } from "react";

export interface DialogProps {
  title: string;
  type: "success" | "warning" | "error";
  message: string;
}

interface DialogContextProps {
  isOpen: boolean;
  setDialog: (dialog: DialogProps) => void;
  closeDialog: () => void;
}

export const DialogContext = createContext({} as DialogContextProps);

export const DialogProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialog, setDialog] = useState<DialogProps>({} as DialogProps);

  function closeDialog() {
    setDialog({} as DialogProps);
  }

  return (
    <DialogContext.Provider value={{
      isOpen,
      setDialog,
      closeDialog
    }}>
      {children}
    </DialogContext.Provider>
  );
};
