import styled from "styled-components";
import { Section } from "./Section.styles";

export const About1Styled = styled(Section)`
  text-align: center;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1000px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadiusLarge};
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
  }

  h2,
  h3,
  p {
    color: ${(props) => props.theme.colors.neutral1};
  }

  h2 {
    margin-bottom: 1.5rem;
  }
`;

export const About1Container = styled.div`
  max-width: 280px;
  margin: auto;
`;

export const About1Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 4rem;
`;

export const About1Card = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  width: 88%;
  padding: 4.5rem 0 3.25rem 0;

  img {
    width: 72px;
    max-width: 100%;
    margin: 0 auto 3.5rem auto;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 212px;
    margin: auto;
  }
`;
