import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ContactPageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;
`;

export const ContactForm = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 1.5rem;
  width: 60%;
  padding: 2rem;
  border-radius: 0.8rem;
  background-color: white;
`;

export const ContactDesc = styled.div`
  display: grid;
  width: 90%;
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
`;
