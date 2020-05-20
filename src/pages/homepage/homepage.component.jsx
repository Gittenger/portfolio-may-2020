import React from "react";

import InfoBox from "../../components/info-box/info-box.component";
import ImageBox from "../../components/image-box/image-box.component";
import Button from "../../components/button/button.component";

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
  </HomePageComponent>
);

export default HomePage;
