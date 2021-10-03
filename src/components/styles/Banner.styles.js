import styled from "styled-components";
import { Section } from "./Section.styles";

export const BannerStyled = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImages.mobile});
  text-align: center;
  gap: 2em;

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
    max-width: 325px;
    opacity: 0.7;
  }

  ${(props) => props.theme.media.medium} {
    background-image: url(${(props) => props.backgroundImages.tablet});
  }

  ${(props) => props.theme.media.large} {
    background-image: url(${(props) => props.backgroundImages.desktop});
  }
`;
