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

    ${(props) => props.theme.media.medium} {
      height: 640px;
    }
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
    ${(props) => props.theme.media.medium} {
      font-size: 2rem;
    }
  }
`;

export const About1Container = styled.div`
  max-width: 280px;
  margin: auto;

  ${(props) => props.theme.media.medium} {
    max-width: 540px;
  }
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

  ${(props) => props.theme.media.medium} {
    padding: 2.56rem 3rem 2.56rem 4.375rem;
    text-align: left;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "image heading"
      "image body";

    img {
      grid-area: image;
      margin: 0;
    }

    h3 {
      grid-area: heading;
      margin: 0;
      font-size: 1.5rem;
    }

    p {
      grid-area: body;
      margin: 0;
      max-width: 350px;
    }
  }
`;
