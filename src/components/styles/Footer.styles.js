import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0 2.5em 0;
  margin-bottom: 2rem;

  #footer-logo {
    width: 218px;
    margin-bottom: 3rem;
  }

  ${(props) => props.theme.media.medium} {
    #footer-logo {
      width: 236px;
    }
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  h2 {
    color: ${(props) => props.theme.colors.neutral2};
    font-size: 0.75em;
    font-family: "Barlow", sans-serif;
    font-weight: 700;
    letter-spacing: 0.92px;
    text-transform: uppercase;
  }

  ${(props) => props.theme.media.medium} {
    flex-direction: row;
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;
