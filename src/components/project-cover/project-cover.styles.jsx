import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ProjectCoverContainer = styled.div`
  width: 95%;
  height: 95%;
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;

  &:hover > * {
    transform: translateY(0);
  }
`;

export const HoverBox = styled.div`
  ${FlexCenter}
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) =>
    `rgba(${colors.RGBsecondary1}, .7)`};
  transform: translateY(-900px);
  transition: 0.3s;
`;
