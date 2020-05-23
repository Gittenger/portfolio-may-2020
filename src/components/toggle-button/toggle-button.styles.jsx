import styled from "styled-components";

import { FlexCenter, deviceMin } from "../../style-utils/utils.styles";

const { minMobileM } = deviceMin;

export const ToggleButtonButton = styled.button`
  ${FlexCenter}
  position: absolute;
  z-index: 2000;
  top: 1.5rem;
  right: 1.5rem;
  width: 30px;
  border: none;
  background-color: transparent;

  & > div {
    width: 100%;
    height: 3px;
    margin: 3px 0;
  }

  @media ${minMobileM} {
    display: none;
  }
`;
