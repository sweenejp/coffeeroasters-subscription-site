import styled from "styled-components";

export const Logo = styled.img`
  width: 163px;
  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    width: 236px;
  } ;
`;
