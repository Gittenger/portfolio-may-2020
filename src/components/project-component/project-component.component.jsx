import React from "react";

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

import { ProjectContainer } from "./project-component.styles";

const ProjectComponent = ({ location: { state } }) => {
  const { imgUrl, name, desc, techStack, embedLink } = state;
  let icons = [];
  techStack.names.forEach((item) => {
    if (item.name === "react") icons.push(ReactLogo);
    if (item.name === "redux") icons.push(ReduxLogo);
    if (item.name === "javascript") icons.push(JSLogo);
    if (item.name === "sass") icons.push(SassLogo);
    if (item.name === "saga") icons.push(SagaLogo);
    if (item.name === "heroku") icons.push(HerokuLogo);
    if (item.name === "firebase") icons.push(FirebaseLogo);
    if (item.name === "node") icons.push(NodeLogo);
    if (item.name === "pug") icons.push(PugLogo);
    if (item.name === "stripe") icons.push(StripeLogo);
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
      <div>{name}</div>
      <img src={imgUrl} alt="" />
      <p style={{ textAlign: "center" }}>{desc}</p>
      <button>See Project</button>
      <button>See code</button>
      <p>
        Tech used:{" "}
        {techStack.names.map((item, index) =>
          index === techStack.names.length - 1
            ? `${item.name}`
            : `${item.name}, `
        )}
      </p>
      <div className="icons-container">
        {icons.map((icon) => (
          <img src={icon} />
        ))}
      </div>
      {embed}
    </ProjectContainer>
  );
};

export default ProjectComponent;
