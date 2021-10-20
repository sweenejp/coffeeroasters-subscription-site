import styled from "styled-components";
import {
  fontHeavy,
  fontLight,
  hoverToPrimary1,
  slideDown,
  fadeIn,
} from "../styledVariables";

export const StyledOrderForm = styled.section`
  form {
    display: flex;
    flex-direction: column;
    flex: 1;

    button {
      align-self: center;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    display: flex;

    form {
      button {
        align-self: flex-start;
      }
    }
  } ;
`;

export const StyledFieldSet = styled.fieldset`
  border: none;
  [data-reach-accordion-button] {
    border: none;
    width: 100%;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.neutral1};
    cursor: pointer;
  }

  [data-reach-accordion-button][disabled] {
    cursor: auto;
    legend {
      opacity: 0.4;
      &:hover {
        color: ${({ theme }) => theme.colors.neutral2};
      }
    }
  }

  [data-reach-accordion-panel][data-state="open"] {
    animation: ${slideDown} 0.3s ease-in-out;
  }
`;

export const Legend = styled.legend`
  display: flex;
  justify-content: space-between;
  ${fontHeavy}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral2};
  ${hoverToPrimary1}
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    transition: transform ease-in-out ${({ theme }) => theme.transitionLength};
    transform: ${({ accordianIndices, index }) =>
      accordianIndices.includes(index) ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const FieldsetCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  margin-bottom: 4rem;

  @media screen and (min-width: ${({ theme }) => theme.media.medium}) {
    flex-direction: row;
  } ;
`;

export const FieldsetCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  label {
    display: block;
    flex: 1;
    padding: 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    background-color: ${({ theme, fieldset, userInput, cardName }) =>
      userInput[fieldset] === cardName
        ? theme.colors.primary1
        : theme.colors.bigSelectionOptionDefault};
    color: ${({ theme, fieldset, userInput, cardName }) =>
      userInput[fieldset] === cardName
        ? theme.colors.neutral1
        : theme.colors.primary2};
    transition: all ease-in-out ${({ theme }) => theme.transitionLength};
    &:hover {
      background-color: ${({ theme, fieldset, userInput, cardName }) =>
        userInput[fieldset] === cardName
          ? theme.colors.primary1
          : theme.colors.primary3};
    }
  }
  input {
    display: none;
  }

  h3 {
    ${fontHeavy}
    font-size: 1.5rem;
  }
  p {
    margin-top: 0.5rem;
    ${fontLight}
  }
`;

export const FormProgressContainer = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.media.large}) {
    display: block;
    margin-right: 125px;
    width: 300px;
  } ;
`;

export const StyledFormProgress = styled.div`
  top: 20px;
  position: sticky;
`;

export const FormProgressItem = styled.h4`
  border-bottom: 1px solid rgba(131, 136, 143, 0.3);
  padding: 1.5rem;
  color: black;
  color: ${({ greyOut, theme }) =>
    greyOut ? theme.colors.neutral2 : theme.colors.primary2};

  span {
    color: ${({ greyOut, theme }) =>
      greyOut ? theme.colors.neutral2 : theme.colors.primary1};
  }
`;

export const StyledOrderSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.neutral1};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem 2rem;
  margin-bottom: 2.5rem;

  h2 {
    ${fontLight}
    font-size: 1rem;
    text-transform: uppercase;
    opacity: 0.7;
  }

  p {
    ${fontHeavy}
    font-size: 1.5rem;

    span {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

export const StyledOrderSummaryModal = styled.div`
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  animation: ${({ display }) => (display ? fadeIn : null)} 1s linear;
  width: 540px;
  max-width: 70%;
  margin: 0 auto 0 auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.neutral1};
  position: relative;
  z-index: 10;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;

  h2 {
    ${fontHeavy}
    color: ${({ theme }) => theme.colors.neutral1};
    background-color: ${({ theme }) => theme.colors.primary2};
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
    padding: 1.75rem 1.5rem;
  }

  p {
    ${fontHeavy}
    line-height: 40px;
    font-size: 1.5rem;
    margin: 1.75rem 1.5rem 0 1.5rem;

    span {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }

  .confirm {
    ${fontLight}
    font-size: 1rem;
    opacity: 0.8;
    margin: 1.75rem 1.5rem 1rem 1.5rem;
  }

  button {
    margin: 1.75rem 1.5rem;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;
