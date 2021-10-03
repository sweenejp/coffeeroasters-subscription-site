import styled from "styled-components";

export const Button = styled.button`
  font-family: "Fraunces", serif;
  border: none;
  cursor: pointer;
  font-weight: 900;
  padding: 1em 1.9375em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.neutral1};
  font-size: 1.125rem;
  text-align: center;
  width: fit-content;
  border-radius: 5px;
  position: relative;
  z-index: 10;
  transition: all ease-in-out ${(props) => props.theme.transitionLength};
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;
