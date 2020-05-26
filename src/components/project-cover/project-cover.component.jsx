import React from "react";
import { Link } from "react-router-dom";

import Button from "../button/button.component";

import { ProjectCoverContainer, HoverBox } from "./project-cover.styles";

const ProjectCover = ({ link, projectId, ...otherProps }) => {
  const { imgUrl } = otherProps;

  return (
    <ProjectCoverContainer imgUrl={imgUrl}>
      <HoverBox>
        <Link
          to={{
            pathname: `${link}/${projectId}`,
            state: {
              ...otherProps,
            },
          }}
        >
          <Button dark={true}>See more</Button>
        </Link>
      </HoverBox>
    </ProjectCoverContainer>
  );
};

export default ProjectCover;
