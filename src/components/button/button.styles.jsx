import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1rem;
  background-color: dodgerblue;
  color: #fff;
  border-radius: 0.5rem;

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
