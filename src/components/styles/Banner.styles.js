import styled from "styled-components";
import { Section } from "./Section.styles";

export const BannerStyled = styled(Section)`
  background-image: url(${(props) => props.backgroundImages.mobile});
  text-align: center;
  gap: 2em;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.3;
    border-radius: 10px;
  }

  h1 {
    color: ${(props) => props.theme.colors.neutral1};
    font-size: 2.5rem;
    line-height: 100%;
    max-width: 325px;
    z-index: 10;
  }

  p {
    font-size: 0.9375rem;
    color: ${(props) => props.theme.colors.neutral1};
  }

  ${(props) => props.theme.media.medium} {
    background-image: url(${(props) => props.backgroundImages.tablet});
  }

  ${(props) => props.theme.media.large} {
    background-image: url(${(props) => props.backgroundImages.desktop});
  }
`;
