import styled from "styled-components";

export const StyledProducts = styled.section`
  text-align: center;
  position: relative;

  h2 {
    background: -webkit-linear-gradient(
      rgba(51, 61, 75, 0.7),
      rgba(0, 0, 0, 0) 75%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 180%;
    font-size: 2.4rem;
    margin: 0 auto 0.8125rem auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    h2 {
      font-size: 5.5rem;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0px;
      z-index: -1;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    h2 {
      font-size: 9.375rem;
      top: -60px;
    }
  }
`;

export const ProductCards = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    padding-top: 100px;
  }
  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;

    p {
      max-width: 200px;
    }
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  img {
    max-width: 200px;
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  div {
    max-width: 282px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
    text-align: left;
    justify-content: center;

    img {
      max-width: 255px;
      margin: 0 2.2rem 0 0;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    flex-direction: column;
    text-align: center;

    img {
      max-width: 234px;
      margin: 0;
    }
  } ;
`;
