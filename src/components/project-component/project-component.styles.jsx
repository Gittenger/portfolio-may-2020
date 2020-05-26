import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { tabletLand, laptopS } = device;

export const ProjectContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;
  padding: 1rem 0 2rem;
  position: absolute;
  z-index: 1;
  top: 0;

  @media ${tabletLand} {
    iframe {
      width: 90%;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const ImageBox = styled.div`
  width: 75%;

  img {
    width: 100%;
  }
`;

export const DescriptionBox = styled.div`
  ${FlexCenter}
  width: 95%;
  padding-top: 1.5rem;
  line-height: 1.6;
  font-size: 1.8rem;

  p {
    text-align: center;
    width: 85%;
  }
`;

export const ButtonBox = styled.div`
  ${FlexCenter}
  justify-content: space-between;
  width: 35%;
  padding-top: 1.5rem;

  @media ${laptopS} {
    width: 80%;
  }

  @media ${tabletLand} {
    width: 75%;
  }
`;

export const TechDescription = styled.div`
  width: 75%;
  padding-top: 1.5rem;
  font-size: 1.8rem;

  p {
    display: inline-block;
    text-align: left;
  }

  p.heading {
    margin-right: 1rem;
    font-weight: 600;
  }
`;

export const TechIcons = styled.div`
  ${FlexCenter}
  padding: 1.5rem 0;
  width: 75%;
  justify-content: space-evenly;

  img {
    ${FlexCenter}
    width: 4rem;
    height: 4rem;
  }

  .saga-logo {
    position: relative;
    top: 0.8rem;
  }

  .heroku-logo {
    position: relative;
    left: 0.4rem;
  }
`;
