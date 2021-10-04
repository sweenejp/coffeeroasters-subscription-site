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

  p {
    opacity: 0.7;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: ${(props) => props.theme.media.medium}) {
    &::before {
      height: 640px;
    }

    h2 {
      font-size: 2rem;
    }

    @media screen and (min-width: ${(props) => props.theme.media.large}) {
      &::before {
        height: 420px;
      }
    }
  }
`;

export const About1Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 4rem;

  @media screen and (min-width: ${(props) => props.theme.media.large}) {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  } ;
`;

export const About1Card = styled.div`
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  width: 89%;
  max-width: 350px;
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
    margin: 0 auto 0 auto;
  }

  @media screen and (min-width: ${(props) => props.theme.media.medium}) {
    padding: 2.56rem 3rem 2.56rem 4.375rem;
    text-align: left;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 700px;

    img {
      margin: 0 1rem 0 0;
    }

    h3 {
      margin: 0;
      font-size: 1.5rem;
    }

    p {
      max-width: 400px;

      margin: 0;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.media.large}) {
    flex-direction: column;
    text-align: center;
    max-width: 350px;

    img {
      margin-bottom: 3.5rem;
    }

    h3 {
      margin-bottom: 1.5rem;
    }
  } ;
`;
