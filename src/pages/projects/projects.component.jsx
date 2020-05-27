import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectProjectsItems } from "../../redux/projects/projects.selectors.js";

import ProjectCover from "../../components/project-cover/project-cover.component";
import ProjectComponent from "../../components/project-component/project-component.component";

import { ProjectsPageContainer, ContentContainer } from "./projects.styles";

const ProjectsPage = ({ match, projects }) => (
  <ProjectsPageContainer>
    <Route
      exact
      path={`${match.path}`}
      render={() => (
        <>
          <h1>Projects</h1>
          <ContentContainer>
            {projects.map(({ index, ...rest }) => (
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

const mapStateToProps = createStructuredSelector({
  projects: selectProjectsItems,
});

export default connect(mapStateToProps)(ProjectsPage);
