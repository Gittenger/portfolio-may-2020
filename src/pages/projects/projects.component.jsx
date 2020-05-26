import React from "react";
import { Route } from "react-router-dom";

import ProjectCover from "../../components/project-cover/project-cover.component";
import ProjectComponent from "../../components/project-component/project-component.component";

import { ProjectsPageContainer, ContentContainer } from "./projects.styles";

const iter = [
  {
    index: 1,
    name: "Ecommerce website",
    imgUrl:
      "https://cdn.dribbble.com/users/702789/screenshots/11415175/media/78c4ba626f026637b8e44637527af9ce.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis ut nihil repudiandae officiis. Ullam, odit? Aspernatur reiciendis in, voluptatem voluptatum minus adipisci maxime qui at quisquam tenetur ipsam quasi, repellendus nesciunt ipsa aut! Consequuntur laborum expedita voluptas aperiam itaque.",
    techStack: {
      names: [
        { name: "react" },
        { name: "redux" },
        { name: "saga" },
        { name: "heroku" },
        { name: "firebase" },
        { name: "stripe" },
      ],
    },
    embedLink: "https://www.youtube.com/embed/MRIMT0xPXFI",
  },
  {
    index: 2,
    name: "Photography site",
    imgUrl:
      "https://cdn.dribbble.com/users/427857/screenshots/11432258/media/6c21baed3f05d3a659d45d1be2ae1369.jpg",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis ut nihil repudiandae officiis. Ullam, odit? Aspernatur reiciendis in, voluptatem voluptatum minus adipisci maxime qui at quisquam tenetur ipsam quasi, repellendus nesciunt ipsa aut! Consequuntur laborum expedita voluptas aperiam itaque.",
    techStack: {
      names: [{ name: "javascript" }, { name: "sass" }],
    },
    embedLink: "https://www.youtube.com/embed/MRIMT0xPXFI",
  },
  {
    index: 3,
    name: "Full-stack Node express app with Pug",
    imgUrl:
      "https://cdn.dribbble.com/users/4859/screenshots/11404832/media/62aabebf69f0bb9699a44a6397f8a81f.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis ut nihil repudiandae officiis. Ullam, odit? Aspernatur reiciendis in, voluptatem voluptatum minus adipisci maxime qui at quisquam tenetur ipsam quasi, repellendus nesciunt ipsa aut! Consequuntur laborum expedita voluptas aperiam itaque.",
    techStack: {
      names: [
        { name: "node" },
        { name: "pug" },
        { name: "stripe" },
        { name: "heroku" },
      ],
    },
    embedLink: "https://www.youtube.com/embed/MRIMT0xPXFI",
  },
  {
    index: 4,
    name: "Portfolio site",
    imgUrl:
      "https://cdn.dribbble.com/users/957817/screenshots/11481482/media/f63c0cb2120f0252bd96b7af912065cc.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis ut nihil repudiandae officiis. Ullam, odit? Aspernatur reiciendis in, voluptatem voluptatum minus adipisci maxime qui at quisquam tenetur ipsam quasi, repellendus nesciunt ipsa aut! Consequuntur laborum expedita voluptas aperiam itaque.",
    techStack: {
      names: [{ name: "react" }, { name: "redux" }],
    },
    embedLink: "https://www.youtube.com/embed/MRIMT0xPXFI",
  },
];

const ProjectsPage = ({ match }) => (
  <ProjectsPageContainer>
    <Route
      exact
      path={`${match.path}`}
      render={() => (
        <>
          {" "}
          <h1>Projects</h1>
          <ContentContainer>
            {iter.map(({ index, ...rest }) => (
              <ProjectCover
                link={match.path}
                key={index}
                projectId={index}
                {...rest}
              />
            ))}
          </ContentContainer>
        </>
      )}
    ></Route>
    <Route
      path={`${match.path}/:projectId`}
      component={ProjectComponent}
    ></Route>
  </ProjectsPageContainer>
);

export default ProjectsPage;
