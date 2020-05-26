import React from "react";
import { Route, Link } from "react-router-dom";

import Button from "../button/button.component";

import { ProjectCoverContainer, HoverBox } from "./project-cover.styles";

const ProjectCover = ({ imgUrl, link, projectId }) => (
  <ProjectCoverContainer imgUrl={imgUrl}>
    <HoverBox>
      <Link to={`${link}/${projectId}`}>
        <Button dark={true}>See more</Button>
      </Link>
    </HoverBox>
  </ProjectCoverContainer>
);

export default ProjectCover;
