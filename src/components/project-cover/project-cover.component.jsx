import React from "react";

import Button from "../button/button.component";

import { ProjectCoverContainer, HoverBox } from "./project-cover.styles";

const ProjectCover = ({ imgUrl }) => (
  <ProjectCoverContainer imgUrl={imgUrl}>
    <HoverBox>
      <Button dark={true}>See more</Button>
    </HoverBox>
  </ProjectCoverContainer>
);

export default ProjectCover;
