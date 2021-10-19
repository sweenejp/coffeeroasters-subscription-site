import styled from "styled-components";

export const StyledWhyChooseUs = styled.section`
  text-align: center;
  position: relative;
  padding-top: 4rem;
  color: ${({ theme }) => theme.colors.neutral1};

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 925px;
    background-color: ${({ theme }) => theme.colors.primary2};
    border-radius: ${({ theme }) => theme.borderRadius.large};
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  > p {
    opacity: 0.8;
    margin: 0 auto 4rem auto;
    max-width: 275px;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    &::before {
      height: 575px;
    }

    > p {
      max-width: 540px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    &::before {
      height: 460px;
    }
  } ;
`;

export const WhyChooseUsCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    flex-direction: row;
  } ;
`;

export const WhyChooseUsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 4.5rem 2.125rem 3.2rem 2.125rem;
  margin: 0 auto 0 auto;
  img {
    margin: 0 0 3.5rem 0;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  div {
    max-width: 210px;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
    text-align: left;
    padding: 2.6rem 4.375rem;
    img {
      margin: 0 3.5rem 0 0;
    }

    div {
      max-width: 345px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    flex-direction: column;
    text-align: center;

    img {
      margin: 0 0 3.5rem 0;
    }
  } ;
`;
