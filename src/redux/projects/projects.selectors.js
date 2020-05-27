import { createSelector } from "reselect";

const selectProjects = (state) => state.projects;

export const selectProjectsItems = createSelector(
  [selectProjects],
  (projects) => projects.projects
);
