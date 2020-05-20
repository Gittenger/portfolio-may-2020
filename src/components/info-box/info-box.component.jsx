import React from "react";

import { InfoBoxContainer } from "./info-box.styles";

const InfoBox = ({ desc: { priority, title, content }, alignment, id }) => (
  <InfoBoxContainer alignment={alignment} id={id}>
    {priority === "h1" ? (
      <h1>{title}</h1>
    ) : priority === "h2" ? (
      <h2>{title}</h2>
    ) : (
      <h3>{title}</h3>
    )}

    <p>{content}</p>
  </InfoBoxContainer>
);

export default InfoBox;
