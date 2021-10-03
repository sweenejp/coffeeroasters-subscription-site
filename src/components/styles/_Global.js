import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: ${(props) => props.theme.colors.neutral1};
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Fraunces", serif;
  font-weight: 900;
}

p {
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  line-height: 26px;
}

img {
  display: block;
  max-width: 100%;
}

`;
