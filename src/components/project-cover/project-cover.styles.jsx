import styled from "styled-components";

export const ProjectCoverContainer = styled.div`
  width: 95%;
  height: 95%;
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
