import styled from "styled-components";
import { fontHeavy } from "../styledVariables";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.neutral1};
  padding: 1rem 2rem;
  ${fontHeavy}
  font-size: 18px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background-color ease-in-out
    ${({ theme }) => theme.transitionLength};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary4};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.buttonDisabled};
    cursor: auto;
  }
`;
