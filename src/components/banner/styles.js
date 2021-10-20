import styled from "styled-components";

export const StyledBanner = styled.section`
  background-image: url(${({ backgroundImages }) => backgroundImages.mobile});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral1};
  padding: 6.25rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  div {
    max-width: 280px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    opacity: 0.8;
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    background-image: url(${({ backgroundImages }) => backgroundImages.tablet});
    text-align: left;
    padding-left: 3.625rem;

    div {
      max-width: 400px;
      margin: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    background-image: url(${({ backgroundImages }) =>
      backgroundImages.desktop});
    padding-left: 5.3rem;
  }
`;
