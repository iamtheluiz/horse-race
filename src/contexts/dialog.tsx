import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export interface DialogProps {
  title: string;
  type: "success" | "warning" | "error";
  message: string;
}

interface DialogContextProps {
  isOpen: boolean;
  dialog: DialogProps;
  setDialog: (dialog: DialogProps) => void;
  closeDialog: () => void;
}

export const DialogContext = createContext({} as DialogContextProps);

export const DialogProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialog, setDialog] = useState<DialogProps>({} as DialogProps);

  useEffect(() => {
    if (dialog.title && dialog.message && dialog.type) {
      setIsOpen(true);
    }
  }, [dialog]);

  function closeDialog() {
    setDialog({} as DialogProps);
    setIsOpen(false);
  }

  return (
    <DialogContext.Provider value={{
      isOpen,
      dialog,
      setDialog,
      closeDialog
    }}>
      {children}
    </DialogContext.Provider>
  );
};

export function useDialog(): DialogContextProps {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useHorse must be used within a HorseProvider");
  }

  return context;
}
