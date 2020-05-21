import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HomePageComponent = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;

  & > *:first-child {
    margin-bottom: 1.5rem;

    & > *:first-child {
      text-transform: uppercase;
      letter-spacing: 1.3px;
    }

    p {
      text-transform: uppercase;
      letter-spacing: 1.3px;
    }
  }

  .image-box {
    width: 20vw;
    height: 20vw;
    margin-bottom: 2rem;
  }

  .icons-container {
    ${FlexCenter}
    position: relative;
    z-index: 1;
    padding-top: 1rem;
    & > * {
      margin: 1rem;
    }
  }
`;
