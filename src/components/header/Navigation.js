import styled from "styled-components";
import { hoverToPrimary } from "../hovers";
import { fontHeavy, fontLight } from "../fonts";

export const Navigation = styled.nav`
  ${fontHeavy}
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  opacity: ${({ display }) => (display ? "1" : "0")};
  transition: opacity ease-in-out ${({ theme }) => theme.transitionLength};
  position: absolute;
  text-align: center;
  height: 100vh;
  width: 100%;
  top: 80px;
  padding-top: 50px;
  background: linear-gradient(
    ${({ theme }) => theme.colors.neutral1} 30%,
    ${({ theme }) => theme.colors.neutral1}00
  );
  z-index: 99;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    line-height: 133%;
  }

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    ${hoverToPrimary}
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    ${fontLight}
    background: none;
    visibility: visible;
    opacity: 1;
    position: static;
    height: auto;
    width: auto;
    padding: 0;

    a {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.92px;
      text-transform: uppercase;
    }

    ul {
      flex-direction: row;
      justify-content: flex-end;
      gap: 3em;
    }
  }
`;
