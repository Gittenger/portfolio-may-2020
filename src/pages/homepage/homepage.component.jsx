import React from "react";

import InfoBox from "../../components/info-box/info-box.component";
import ImageBox from "../../components/image-box/image-box.component";
import IconBox from "../../components/icon-box/icon-box.component";
import Button from "../../components/button/button.component";

import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as EmailLogo } from "../../assets/envelope.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";

import { HomePageComponent } from "./homepage.styles";

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
    <Button>See my work &rarr;</Button>
    <div className="icons-container">
      <IconBox fill="dodgerblue" hover="red">
        <GithubLogo />
      </IconBox>
      <IconBox fill="dodgerblue" hover="red">
        <TwitterLogo />
      </IconBox>
      <IconBox fill="dodgerblue" hover="red">
        <EmailLogo />
      </IconBox>
      <IconBox fill="dodgerblue" hover="red">
        <LinkedinLogo />
      </IconBox>
    </div>
  </HomePageComponent>
);

export default HomePage;
