import React from "react";
import { StyledButton } from "./styles";

function Button({ children, disabled }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

export default Button;
