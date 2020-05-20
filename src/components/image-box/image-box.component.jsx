import React from "react";

import { ImageBoxContainer } from "./image-box.styles";

const ImageBox = ({ ...props }) => (
  <ImageBoxContainer className="image-box" {...props} />
);

export default ImageBox;
