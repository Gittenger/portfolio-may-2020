import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ResumePageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;

  & > h1 {
    margin-bottom: 1rem;
  }
`;

export const ResumeContainer = styled.div`
  ${FlexCenter}
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  user-select: none;
  & > * {
    height: 100%;
  }
`;
