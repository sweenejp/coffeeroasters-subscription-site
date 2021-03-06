import { css, keyframes } from "styled-components";

export const hoverToPrimary1 = css`
  transition: color ease-in-out ${({ theme }) => theme.transitionLength};
  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const hoverToPrimary3 = css`
  transition: color ease-in-out ${({ theme }) => theme.transitionLength};
  &:hover {
    color: ${({ theme }) => theme.colors.primary3};
  }
`;

export const fontHeavy = css`
  font-family: "Fraunces", serif;
  font-weight: 900;
`;

export const fontLight = css`
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  line-height: 26px;
`;

export const fadeIn = keyframes`
  from {
    opacity: .3;
  }
  to {
    opacity: 1;
  }
`;

export const slideDown = keyframes`
  0% {
  -webkit-transform: translateY(-60px);
  transform: translateY(-60px);
  opacity: .2;
  }
  100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  }
`;
