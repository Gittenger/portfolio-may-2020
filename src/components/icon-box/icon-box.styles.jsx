import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const IconBoxContainer = styled.div`
  ${FlexCenter}

  svg {
    fill: ${({ fill }) => fill};
  }

  svg:hover {
    cursor: pointer;
    fill: ${({ hover }) => hover};
  }
`;
