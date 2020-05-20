import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ResumePageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;
`;

export const ResumeContainer = styled.div`
  ${FlexCenter}
  width: 80%;
  height: 80%;
  overflow-y: scroll;

  & > * {
    height: 100%;
  }
`;
