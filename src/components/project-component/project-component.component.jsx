import React from "react";

import Button from "../button/button.component";
import createIcons from "./create-icons.utils.js";

import SagaLogo from "../../assets/redux-saga.svg";
import HerokuLogo from "../../assets/heroku.svg";

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

  const icons = createIcons(techStack);

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
