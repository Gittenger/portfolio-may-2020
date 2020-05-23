import React from "react";

import { ToggleButtonButton } from "./toggle-button.styles";

const ToggleButton = ({ toggleMenuActive }) => (
  <ToggleButton onClick={toggleMenuActive}>
    <div></div>
    <div></div>
    <div></div>
  </ToggleButton>
);

export default ToggleButton;
