import styled from "styled-components";

export const StyledLocations = styled.section`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary2};

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral2};
    margin-bottom: 4.5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    text-align: left;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const LocationCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
  }
`;

export const LocationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 3rem;
  }

  h3 {
    margin-bottom: 1.375rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    align-items: flex-start;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    h3 {
      font-size: 2rem;
    }
  } ;
`;
