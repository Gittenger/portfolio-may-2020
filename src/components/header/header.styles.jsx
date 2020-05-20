import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(to bottom right, ${colors.grad1}, ${colors.grad2})`};

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 400px;
  }

  ul {
    height: 70%;
    width: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    font-size: 2rem;
  }

  li {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 100%;
    text-align: center;
    transition: all 0.3s;
    padding: 1rem 0;
  }

  a:hover {
    background-color: rgba(10, 10, 10, 0.8);
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
