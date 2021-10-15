import { createGlobalStyle } from "styled-components";
import { fontLight, fontHeavy } from "./fonts";

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
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

`;
