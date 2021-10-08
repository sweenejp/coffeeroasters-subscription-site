import { css } from "styled-components";

export const hoverToPrimary = css`
  transition: color ease-in-out ${({ theme }) => theme.transitionLength};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
