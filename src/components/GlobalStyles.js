import { createGlobalStyle } from "styled-components";
import { fontLight, fontHeavy, hoverToPrimary3 } from "./styledVariables";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: ${({ theme }) => theme.colors.neutral1};
}

h1,h2,h3,h4,h5,h6 {
  ${fontHeavy}
}

p {
  ${fontLight}
  font-size: 0.9375rem;
  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    font-size: 1rem
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

section, article {
  margin-bottom: 7.5rem;

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    margin-bottom: 9rem
  };

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    margin-bottom: 10.5rem
  }
}

.react-icons {
  color: ${({ theme }) => theme.colors.neutral1};
  ${hoverToPrimary3}
}

`;
