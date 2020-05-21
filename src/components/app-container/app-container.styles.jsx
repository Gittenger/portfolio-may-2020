import styled from "styled-components";

import { device } from "../../style-utils/utils.styles";

const { mobileM } = device;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: minmax(700px, 100vh);
  overflow: hidden;

  @media ${mobileM} {
    grid-template-columns: 1fr;
  }
`;
