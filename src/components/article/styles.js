import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  gap: 3rem;

  img {
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  div {
    max-width: 350px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.875rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    text-align: left;
    flex-direction: row;
    gap: 4.3rem;

    img {
      width: 281px;
      height: 470px;
      object-fit: cover;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    gap: 7.8125rem;
    h2 {
      font-size: 2.5rem;
    }

    img {
      width: 445px;
      height: 520px;
    }

    div {
      max-width: 500px;
    }
  } ;
`;

export const StyledArticleDark = styled(StyledArticle)`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.neutral1};
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  img {
    position: relative;
    top: -75px;
    width: 85%;
    max-width: 400px;
    height: 160px;
    object-fit: cover;
    object-position: bottom;
  }

  div {
    position: relative;
    top: -75px;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: column;
    text-align: center;
    gap: 4rem;

    img {
      max-width: 600px;
      height: 320px;
    }

    div {
      max-width: 600px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    flex-direction: row;
    gap: 7.8125rem;
    text-align: left;
    padding-left: 5.1325rem;
    padding-right: 5.1325rem;
    div {
      order: 1;
    }
    img {
      order: 2;
      height: 474px;
      max-width: 445px;
    }

    div {
      position: static;
    }
  }
`;
