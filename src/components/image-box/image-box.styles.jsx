import styled from "styled-components";

export const ImageBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: ${({ circle }) => (circle ? "50%" : "0")};
`;
