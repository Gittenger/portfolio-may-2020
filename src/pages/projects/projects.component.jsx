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
      "I created an ecommerce platform for selling clothing items. I used React to build reusable components and encapsulated the styling for those components with the Styled Components library. State management for the app was handled by Redux, with Redux Saga handling asynchronous actions. User authentication was done using Firebase by Google. Firebase handled data storage as well. A simple back-end was created using express for the purpose of integrating a working payment system using Stripe. The app is being hosted on Heroku.",
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
      "This is a simple layout to display a photographer's work. The layout was created simply using HTML, JavaScript, and CSS. The Masonry.js library was used for creating the layout, while animation library Sal.js is used to create smooth scrolling animations.",
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
      'This app utilizes NodeJS, Express, and MongoDB to create an extensive API for handling business needs. There is a user authentication system built from scratch using Express, and user roles to give certain user types special permissions. Regular users can post reviews, while "tour guides" can do things like create new tours. Mapbox was used for integrating a map since it\'s free out of the box as opposed to Google Maps. Payments are handled using Stripe, and the app is hosted on Heroku. Other features include image uploading and HTML templating using Pug.',
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
      "This portfolio site is designed to showcase a few of my projects as a software developer. I created it using React with Redux for state management. I included a library called React-Pdf for rendering my resume as a React component. The site is mobile friendly and utilizes many reusable components, as well as Styled Components for styling.",
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
