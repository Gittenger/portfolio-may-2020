import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const InfoBoxContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  align-items: ${({ alignment }) =>
    alignment === "center"
      ? "center"
      : alignment === "left"
      ? "flex-start"
      : "flex-end"};
  width: 100%;
  p {
    text-align: ${({ alignment }) =>
      alignment === "center"
        ? "center"
        : alignment === "left"
        ? "left"
        : "right"};
    margin: 0.5rem 0;
  }
`;
