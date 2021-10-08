import styled from "styled-components";
import { hoverToPrimary } from "../hovers";
import { fontLight } from "../fonts";

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
    ${hoverToPrimary}
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    align-items: center;
    justify-content: flex-start;
    flex: 2;
    margin-left: 2rem;
  }
`;
