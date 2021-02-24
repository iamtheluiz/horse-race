import React, { ButtonHTMLAttributes } from "react";

import "./styles.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>{children}</button>
  );
};

export default Button;