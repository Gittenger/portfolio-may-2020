import styled, { css } from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

const normalStyles = css`
  background-color: ${({ theme: { colors } }) => colors.primary2};
  color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primaryDark1};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.primaryDark1};
    border: ${({ theme: { colors } }) => `2px solid ${colors.primaryDark1}`};
  }
`;

const darkStyles = css`
  background-color: ${({ theme: { colors } }) => colors.primaryDark1};
  color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary1};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.primaryDark1};
    border: ${({ theme: { colors } }) => `2px solid ${colors.primaryDark1}`};
  }
`;

const getStyleType = ({ dark }) => (dark ? darkStyles : normalStyles);

export const ButtonContainer = styled.button`
  ${FlexCenter}
  padding: 1rem 1.5rem;

  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  user-select: none;
  transition: background 0.5s;

  &:hover {
    cursor: pointer;
  }

  ${getStyleType}
`;
