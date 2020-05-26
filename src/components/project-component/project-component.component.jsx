import React from "react";

import GithubLogo from "../../assets/github.svg";
import { ReactComponent as EmailLogo } from "../../assets/envelope.svg";
import LinkedinLogo from "../../assets/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";
import { ProjectContainer } from "./project-component.styles";

const ProjectComponent = ({ location: { state } }) => {
  const { imgUrl, name, desc, techStack, embedLink } = state;
  let icons = [];
  techStack.names.forEach((item) => {
    if (item.name === "github") icons.push(GithubLogo);
    if (item.name === "linkedin") icons.push(LinkedinLogo);
  });
  const embed = (
    <iframe
      iframe
      width="560"
      height="315"
      src={embedLink}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );

  return (
    <ProjectContainer>
      <div>{name}</div>
      <img src={imgUrl} alt="" />
      <p style={{ textAlign: "center" }}>{desc}</p>
      <p>Tech used: {techStack.names[0].name}</p>
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
