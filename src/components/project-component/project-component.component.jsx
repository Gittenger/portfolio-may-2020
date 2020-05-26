import React from "react";

import { ProjectContainer } from "./project-component.styles";

const ProjectComponent = ({ location: { state } }) => {
  const { imgUrl } = state;

  return (
    <div>
      <img src={imgUrl} alt="" />
      <div>Project</div>
    </div>
  );
};

export default ProjectComponent;
