import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

import { deviceMin } from "../../style-utils/utils.styles";

const { minMobileM } = deviceMin;

export const HeaderContainer = styled.header`
  ${FlexCenter}
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to bottom right, ${colors.primaryDark1}, ${colors.primaryDark2})`};

  @media ${minMobileM} {
    display: none;
  }

  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  transform: translateY(-3000px);
  transition: transform  .4s;

  &.active {
    transform: translateY(0);
  }

  nav {
    ${FlexCenter}
    width: 220px;
    height: 400px;
  }

  ul {
    height: 70%;
    width: 100%;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    font-size: 2rem;
  }

  li {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 100%;
    border-radius: 0.4rem;
    text-align: center;
    transition: all 0.5s;
    padding: 1rem 0;
  }

  a:hover {
    background-color: ${({ theme: { colors } }) => colors.primaryDark2};
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const ToggleButtonButton = styled.div`
  ${FlexCenter}
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  z-index: 2000;
  top: 1.5rem;
  right: 1.5rem;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;

  div {
    width: 100%;
    height: 0.3rem;
    margin: 0.3rem 0;
    background-color: black;
    transform: rotate(0) translate(0, 0);
    transition: transform 0.5s;
  }

  &.active {
    div {
      background-color: white;
    }

    div:nth-child(2) {
      transform: translateX(500px);
    }

    & > div:first-child {
      transform: rotate(45deg) translateY(14px);
    }

    & > div:last-child {
      transform: rotate(-45deg) translateY(-13px);
    }
  }

  @media ${minMobileM} {
    display: none;
  }
`;
