import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2em 0 2.5em 0;

  #logo-header {
    width: 163px;
    height: 18px;
  }
`;

export const NavIcon = styled.div`
  background-image: url("./images/shared/mobile/icon-hamburger.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  visibility: ${(props) => (props.display ? "visible" : "hidden")};
  opacity: ${(props) => (props.display ? "1" : "0")};
  transition: opacity ease-in-out ${(props) => props.theme.transitionLength};
  position: absolute;
  text-align: center;
  height: 100vh;
  width: 100%;
  top: 80px;
  padding-top: 50px;
  background: linear-gradient(
    ${(props) => props.theme.colors.neutral1} 30%,
    ${(props) => props.theme.colors.neutral1}00
  );
  z-index: 99;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    line-height: 133%;
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.secondary};
    width: fit-content;
    transition: color ease-in-out ${(props) => props.theme.transitionLength};

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
