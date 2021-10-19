import styled from "styled-components";

export const Logo = styled.img`
  width: 163px;
  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    width: 236px;
  } ;
`;

export const Container = styled.div`
  margin: 0 1.5rem;
  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    margin: 0 2.5rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    margin: 0 5rem;
  } ;
`;
