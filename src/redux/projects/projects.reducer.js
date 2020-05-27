import data from "./projects.data";

const INITIAL_STATE = data;

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
