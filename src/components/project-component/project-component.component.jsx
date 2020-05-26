import React from "react";

import Button from "../button/button.component";

import ReactLogo from "../../assets/react.svg";
import ReduxLogo from "../../assets/redux.svg";
import JSLogo from "../../assets/javascript.svg";
import SassLogo from "../../assets/sass.svg";
import SagaLogo from "../../assets/redux-saga.svg";
import HerokuLogo from "../../assets/heroku.svg";
import FirebaseLogo from "../../assets/firebase.svg";
import PugLogo from "../../assets/pug.svg";
import NodeLogo from "../../assets/node.svg";
import StripeLogo from "../../assets/stripe.svg";

import {
  ProjectContainer,
  Title,
  ImageBox,
  DescriptionBox,
  ButtonBox,
  TechDescription,
  TechIcons,
} from "./project-component.styles";

const ProjectComponent = ({ location: { state } }) => {
  const {
    imgUrl,
    name,
    desc,
    techStack,
    embedLink,
    githubLink,
    projectLink,
  } = state;
  let icons = [];
  techStack.names.forEach((item) => {
    if (item.name === "React") icons.push(ReactLogo);
    if (item.name === "Redux") icons.push(ReduxLogo);
    if (item.name === "JavaScript") icons.push(JSLogo);
    if (item.name === "Sass") icons.push(SassLogo);
    if (item.name === "Saga") icons.push(SagaLogo);
    if (item.name === "Heroku") icons.push(HerokuLogo);
    if (item.name === "Firebase") icons.push(FirebaseLogo);
    if (item.name === "Node") icons.push(NodeLogo);
    if (item.name === "Pug") icons.push(PugLogo);
    if (item.name === "Stripe") icons.push(StripeLogo);
  });
  const embed = (
    <iframe
      width="560"
      height="315"
      src={embedLink}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );

  return (
    <ProjectContainer>
      <Title>{name}</Title>
      <ImageBox>
        <img src={imgUrl} alt="" />
      </ImageBox>
      <DescriptionBox>
        <p>{desc}</p>
      </DescriptionBox>
      <ButtonBox>
        <a href={projectLink} target="_blank">
          <Button dark={true}>See Project</Button>
        </a>
        <a href={githubLink} target="_blank">
          <Button dark={true}>See code</Button>
        </a>
      </ButtonBox>
      <TechDescription>
        <p className="heading">Tech used:</p>
        <p>
          {techStack.names.map((item, index) =>
            index === techStack.names.length - 1
              ? `${item.name}`
              : `${item.name}, `
          )}
        </p>
      </TechDescription>
      <TechIcons>
        {icons.map((icon, index, arr) => {
          if (arr[index] === SagaLogo) {
            return <img src={icon} className="saga-logo" key={icon} />;
          }
          if (arr[index] === HerokuLogo) {
            return <img src={icon} className="heroku-logo" key={icon} />;
          } else return <img src={icon} key={icon} />;
        })}
      </TechIcons>
      {embed}
    </ProjectContainer>
  );
};

export default ProjectComponent;
