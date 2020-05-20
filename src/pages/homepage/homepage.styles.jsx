import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HomePageComponent = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;

  .image-box {
    width: 20vw;
    height: 20vw;
  }
`;
