import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ProjectsPageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 90%;
  height: 80%;
  background-color: white;
`;
