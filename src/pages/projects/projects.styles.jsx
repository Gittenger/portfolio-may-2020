import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { tabletM } = device;

export const ProjectsPageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
  position: relative;

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

  @media ${tabletM} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 23rem);
    overflow-y: scroll;
  }
`;
