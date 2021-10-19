import styled from "styled-components";
import { hoverToPrimary1, fontLight } from "../styledVariables";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary2};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0 2.5em 0;
  margin-bottom: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.9375rem 5.3125rem;
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 0rem;

  a {
    ${fontLight}
    color: ${({ theme }) => theme.colors.neutral2};
    font-size: 0.75em;
    font-weight: 700;
    letter-spacing: 0.92px;
    text-transform: uppercase;
    ${hoverToPrimary1}
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    align-items: center;
    justify-content: flex-start;
    flex: 2;
    margin-left: 2rem;
    padding: 0;
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;
