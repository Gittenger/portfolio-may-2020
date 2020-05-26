import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

import { device } from "../../style-utils/utils.styles";

const { mobileM, tabletLand } = device;

export const HeaderContainer = styled.header`
${FlexCenter}
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to bottom right, ${colors.primaryDark1}, ${colors.primaryDark2})`};

    @media ${mobileM} {
      display: none;
    }

  nav {
    ${FlexCenter}
    width: 90%;
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
