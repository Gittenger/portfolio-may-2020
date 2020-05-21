import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const IconBoxContainer = styled.div`
  ${FlexCenter}

  svg {
    fill: ${({ fill }) => fill};
    transform: translateY(0);
    transition: all 0.3s;
  }

  svg:hover {
    cursor: pointer;
    fill: ${({ hover }) => hover};
  }

  svg:active {
    filter: brightness(90%);
    transform: translateY(2px);
  }
`;
