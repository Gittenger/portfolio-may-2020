import React from "react";

import { IconBoxContainer } from "./icon-box.styles";

const IconBox = ({ children, ...otherProps }) => (
  <IconBoxContainer {...otherProps}>{children}</IconBoxContainer>
);

export default IconBox;
