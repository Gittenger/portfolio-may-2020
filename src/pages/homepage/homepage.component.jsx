import React from "react";
import { Link } from "react-router-dom";

import InfoBox from "../../components/info-box/info-box.component";
import ImageBox from "../../components/image-box/image-box.component";
import IconBox from "../../components/icon-box/icon-box.component";
import Button from "../../components/button/button.component";

import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as EmailLogo } from "../../assets/envelope.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";

import theme from "../../style-utils/theme.styles";
import { HomePageComponent } from "./homepage.styles";

const iter = [
  { index: 1, render: GithubLogo, link: "https://github.com/Gittenger" },
  { index: 2, render: TwitterLogo, link: "https://twitter.com/GittengerDev" },
  { index: 3, render: EmailLogo, link: "email@email.com", email: true },
  {
    index: 4,
    render: LinkedinLogo,
    link: "https://www.linkedin.com/in/john-pittenger/",
  },
];

const HomePage = () => (
  <HomePageComponent>
    <InfoBox
      desc={{
        priority: "h1",
        title: "John Pittenger",
        content: "Web Developer",
      }}
      alignment="center"
    />
    <ImageBox
      circle
      imgUrl={
        "https://i.pinimg.com/originals/da/45/f8/da45f8791ec444f1599fb45bf5e1b705.jpg"
      }
    />
    <Link to="/projects">
      <Button>See my work &#8640;</Button>
    </Link>
    <div className="icons-container">
      {iter.map((item) => (
        <IconBox
          link={item.link}
          fill={theme.colors.primaryDark1}
          hover={theme.colors.primary2}
          key={item.index}
          email={item.email}
        >
          <item.render />
        </IconBox>
      ))}
    </div>
  </HomePageComponent>
);

export default HomePage;
