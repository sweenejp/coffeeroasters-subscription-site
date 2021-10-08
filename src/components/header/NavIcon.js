import styled from "styled-components";

export const NavIcon = styled.div`
  background-image: url("./images/shared/mobile/icon-hamburger.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 16px;
  width: 16px;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;
