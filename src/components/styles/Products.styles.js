import styled from "styled-components";
import { Section } from "./Section.styles";

export const ProductsStyled = styled(Section)`
  margin: auto;
  text-align: center;
  position: relative;

  ${(props) => props.theme.media.medium} {
    margin-top: 144px;
  }

  h2 {
    background: -webkit-linear-gradient(
      rgba(51, 61, 75, 0.7),
      rgba(0, 0, 0, 0) 75%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    line-height: 180%;
    font-size: 2.4rem;
    margin-bottom: 0 auto 13px auto;
    ${(props) => props.theme.media.medium} {
      font-size: 6rem;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0px;
      z-index: -1;
    }
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  h3 {
    line-height: 133%;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    max-width: 282px;
    margin: auto;
  }

  img {
    max-width: 200px;
    margin: auto;
    margin-bottom: 1.5rem;
  }

  ${(props) => props.theme.media.medium} {
    text-align: left;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "image heading"
      "image body";

    img {
      max-width: 255px;
      grid-area: image;
      margin: 0;
      justify-self: center;
    }

    h3 {
      grid-area: heading;
      margin: 0;
    }

    p {
      grid-area: body;
      margin: 0;
      align-self: start;
    }
  }
`;
