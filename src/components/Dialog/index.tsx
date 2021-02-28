import React from "react";
import { useDialog } from "../../contexts/dialog";
import Button from "../Button";

import "./styles.css";

const Dialog: React.FC = () => {
  const {isOpen, dialog, closeDialog} = useDialog();

  if (!isOpen) {
    return <></>;
  }

  return isOpen && (
    <>
      <div id="dialog-container">
        <strong>{dialog.title}</strong>
        <p>{dialog.message}</p>
        <Button onClick={closeDialog}>Close</Button>
      </div>
      <div id="dialog-filter" />
    </>
  );
};

export default Dialog;