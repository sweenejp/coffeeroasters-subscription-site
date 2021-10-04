import styled from "styled-components";
import { Section } from "./Section.styles";

export const ProductsStyled = styled(Section)`
  margin: auto;
  text-align: center;
  position: relative;

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
  }

  @media screen and (min-width: ${(props) => props.theme.media.medium}) {
    margin-top: 144px;

    h2 {
      font-size: 6rem;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0px;
      z-index: -1;
    }
  }
  @media screen and (min-width: ${(props) => props.theme.media.large}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 28px;

    h2 {
      font-size: 9.375rem;
      top: -60px;
    }

    p {
      max-width: 200px;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 3rem auto;
  max-width: 500px;

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    line-height: 133%;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    max-width: 282px;
    margin: 0 auto 0 auto;
  }

  img {
    max-width: 200px;
    margin: 0 auto 0 auto;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.media.medium}) and (max-width: ${(props) =>
      props.theme.media.large}) {
    text-align: left;
    flex-direction: row;
    justify-content: space-evenly;

    img {
      max-width: 256px;
      margin: 0;
      justify-self: center;
    }

    h3 {
      padding-top: 1rem;
      margin: 0;
    }

    p {
      margin: 0;
    }

    @media screen and (min-width: ${(props) => props.theme.media.large}) {
      flex-direction: row;
    }
  }
`;
