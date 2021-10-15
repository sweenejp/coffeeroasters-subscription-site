import React from "react";
import styled from "styled-components";

const StyledFormProgressItem = styled.h4`
  a {
    color: black;
    color: ${({ crossOff }) => (crossOff ? "red" : "green")};
  }
`;

function FormProgress({ content, choices }) {
  return (
    <>
      {content.map((fieldset) => (
        <StyledFormProgressItem
          key={fieldset.id}
          crossOff={choices[fieldset.id] === "_____" ? false : true}
        >
          <a href={`#${fieldset.id}`}>{fieldset.altHeading}</a>
        </StyledFormProgressItem>
      ))}
    </>
  );
}

export default FormProgress;
