import React from "react";

import ProjectCover from "../../components/project-cover/project-cover.component";

import { ProjectsPageContainer, ContentContainer } from "./projects.styles";

const iter = [
  {
    index: 1,
    imgUrl:
      "https://cdn.dribbble.com/users/702789/screenshots/11415175/media/78c4ba626f026637b8e44637527af9ce.png",
  },
  {
    index: 2,
    imgUrl:
      "https://cdn.dribbble.com/users/427857/screenshots/11432258/media/6c21baed3f05d3a659d45d1be2ae1369.jpg",
  },
  {
    index: 3,
    imgUrl:
      "https://cdn.dribbble.com/users/4859/screenshots/11404832/media/62aabebf69f0bb9699a44a6397f8a81f.png",
  },
  {
    index: 4,
    imgUrl:
      "https://cdn.dribbble.com/users/957817/screenshots/11481482/media/f63c0cb2120f0252bd96b7af912065cc.png",
  },
];

const ProjectsPage = () => (
  <ProjectsPageContainer>
    <h1>Projects</h1>
    <ContentContainer>
      {iter.map(({ index, ...rest }) => (
        <ProjectCover key={index} {...rest} />
      ))}
    </ContentContainer>
  </ProjectsPageContainer>
);

export default ProjectsPage;
