import styled from "styled-components";
import { Section } from "./Section.styles";

export const About2Styled = styled(Section)`
  text-align: center;

  h2 {
    color: ${(props) => props.theme.colors.neutral2};
    font-size: 1.5rem;
  }
  h3,
  p {
    color: ${(props) => props.theme.colors.secondary};
  }

  h2 {
    margin-bottom: 5rem;
  }

  button {
    margin: 6rem auto 0 auto;
  }
`;

export const About2Cards = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`;

export const About2Card = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 327px;

  h3 {
    margin-bottom: 1.5rem;
    order: 1;
  }

  h4 {
    order: 0;
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.tertiary};
  }

  p {
    margin: auto;
    order: 2;
  }
`;
