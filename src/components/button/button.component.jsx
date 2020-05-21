import React from "react";

import { ButtonContainer } from "./button.styles";

const Button = ({ children, dark }) => (
  <ButtonContainer dark={dark}>{children}</ButtonContainer>
);

export default Button;
