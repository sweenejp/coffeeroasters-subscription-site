import styled from "styled-components";

export const About2Styled = styled.section`
  text-align: center;
  padding: 6.25em 0;

  h2 {
    color: ${(props) => props.theme.colors.neutral2};
    font-size: 1.5rem;
    margin-bottom: 5rem;
  }

  button {
    margin: 6rem auto 0 auto;
  }

  @media screen and (min-width: ${(props) => props.theme.media.medium}) {
    text-align: left;

    button {
      margin: 2.875rem 0 0 0;
    }
  }
`;

export const About2Cards = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  @media screen and (min-width: ${(props) => props.theme.media.medium}) {
    flex-direction: row;
    align-items: stretch;
  }

  @media screen and (min-width: ${(props) => props.theme.media.large}) {
    gap: 6rem;
  }
`;

export const About2Card = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 234px;

  h3 {
    color: ${(props) => props.theme.colors.secondary};
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
    color: ${(props) => props.theme.colors.secondary};
    margin: 0 auto 0 auto;
    order: 2;
  }
  @media screen and (min-width: ${(props) => props.theme.media.medium}) {
    h3 {
      font-size: 1.75rem;
    }
  }
`;
