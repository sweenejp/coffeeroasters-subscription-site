import styled from "styled-components";

export const StyledOrderProcess = styled.section`
  text-align: center;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.primary2 : theme.colors.neutral1};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 5rem 1.5rem;

  h2 {
    color: ${({ theme }) => theme.colors.neutral2};
    font-size: 1.5rem;
    margin-bottom: 5rem;
  }

  button {
    margin: 6rem auto 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    text-align: left;
    padding: 5rem 2.5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    padding: 5rem 5.3rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

export const OrderProcessCards = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
    align-items: stretch;
    gap: 6rem;
  } ;
`;

export const OrderProcessCard = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 327px;
  position: relative;

  h3 {
    color: ${({ theme, isDark }) =>
      isDark ? theme.colors.neutral1 : theme.colors.primary2};
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    order: 1;
  }

  h4 {
    order: 0;
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary3};
  }

  p {
    color: ${({ theme, isDark }) =>
      isDark ? theme.colors.neutral1 : theme.colors.primary2};
    margin: 0 auto 0 auto;
    order: 2;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    font-size: 2rem;
    max-width: 255px;
  } ;
`;

export const StyledHR = styled.div``;
