import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { tabletM, mobileM } = device;

export const ContactPageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;

  & > h1 {
    margin-bottom: 1rem;
  }
`;

export const ContactForm = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 1.5rem;
  width: 60%;
  padding: 2rem;
  border-radius: 0.8rem;
  background-color: white;

  @media ${tabletM} {
    width: 90%;
  }
`;

export const ContactDesc = styled.div`
  display: grid;
  width: 90%;

  p:first-child {
    margin-bottom: 1rem;
  }
`;

export const ContactOptions = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-column-gap: 2rem;
  justify-self: start;
  position: relative;
  transform: translateX(5rem);

  a {
    &:hover {
      color: red;
      text-decoration: underline;
    }
  }

  h2 {
    justify-self: end;
  }

  @media ${mobileM} {
    width: 60%;
    grid-template-columns: 1fr 1fr;
    transform: translateX(1rem);

    h2 {
      justify-self: center;
    }
  }
`;
