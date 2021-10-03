import styled from "styled-components";
import { Section } from "./Section.styles";

export const ProductsStyled = styled(Section)`
  max-width: 282px;
  margin: auto;

  h2 {
    background: -webkit-linear-gradient(
      rgba(51, 61, 75, 0.7),
      rgba(0, 0, 0, 0)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    line-height: 180%;
    font-size: 2.4rem;
    margin-bottom: 13px;
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3rem;

  h3 {
    line-height: 133%;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
  }

  img {
    max-width: 200px;
    margin: auto;
    margin-bottom: 1.5rem;
  }
`;
