import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ProjectContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;

  img {
    width: 500px;
  }

  .icons-container {
    img {
      width: 3rem;
    }
  }
`;
