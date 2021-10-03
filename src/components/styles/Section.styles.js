import styled from "styled-components";

export const Section = styled.section`
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  padding: 6.25em 1.5em;

  ${(props) => props.theme.media.medium} {
    padding: 6.25em 3.625em;
  }
`;
