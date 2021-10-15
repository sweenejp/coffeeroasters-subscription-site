import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fadeIn } from "../animations";

const FieldSetCards = styled.div`
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  animation: ${({ display }) => (display ? fadeIn : null)} 1s linear;
`;

const StyledFieldSet = styled.fieldset``;

function Fieldsets({ content, choices, setChoices }) {
  const [fieldsets, setFieldsets] = useState(content);
  const handleChange = (event) => {
    const { name, id } = event.target;
    setChoices({ ...choices, [name]: id });
  };

  const fieldsetsElements = fieldsets.map((fieldset, index) => (
    <StyledFieldSet key={fieldset.id}>
      <legend>
        <h2>{fieldset.heading}</h2>
      </legend>
      <FieldSetCards>
        {fieldset.cards.map((card) => (
          <div key={card.id} display={content.display}>
            <input
              required
              type="radio"
              name={fieldset.id}
              data-index={index}
              id={card.heading}
              onChange={handleChange}
            />
            <label htmlFor={card.heading}>{card.heading}</label>
            <p>{card.description}</p>
          </div>
        ))}
      </FieldSetCards>
    </StyledFieldSet>
  ));
  return <>{fieldsetsElements}</>;
}

export default Fieldsets;
