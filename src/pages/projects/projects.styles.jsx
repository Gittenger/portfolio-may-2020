import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ProjectsPageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;

  & > h1 {
    margin-bottom: 1rem;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 90%;
  height: 80%;
  background-color: ${({ theme: { colors } }) => colors.primaryDark1};
  border-radius: 0.8rem;
`;
