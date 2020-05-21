import React from "react";

import { IconBoxContainer } from "./icon-box.styles";

const IconBox = ({ children, link, email, ...otherProps }) => (
  <IconBoxContainer {...otherProps}>
    <a target="_blank" href={email ? `mailto:${link}` : link}>
      {children}
    </a>
  </IconBoxContainer>
);

export default IconBox;
