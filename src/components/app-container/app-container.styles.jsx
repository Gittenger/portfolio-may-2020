import styled from "styled-components";

import { device } from "../../style-utils/utils.styles";

const { mobileM, tabletS, tabletM, laptopS, laptopM } = device;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: minmax(700px, 100vh);
  overflow: hidden;
  max-height: 100vh;

  @media ${laptopM} {
    grid-template-columns: 1.2fr 5fr;
  }

  @media ${laptopS} {
    grid-template-columns: 1fr 3fr;
  }

  @media ${tabletM} {
    grid-template-columns: 1.2fr 3fr;
  }

  @media ${tabletS} {
    grid-template-columns: 1.4fr 3fr;
  }

  @media ${mobileM} {
    grid-template-columns: 1fr;
  }
`;
