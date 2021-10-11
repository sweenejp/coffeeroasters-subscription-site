import React, { useState } from "react";
import styled from "styled-components";
import { fadeIn } from "../animations";

const FieldSetCards = styled.div`
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  animation: ${({ display }) => (display ? fadeIn : null)} 1s linear;
`;

const StyledFieldSet = styled.fieldset``;

function Fieldsets({ content, choices, setChoices }) {
  let intialDisplays = [true, false, false, false, false];

  const [displayFieldsets, setDisplayFieldsets] = useState(intialDisplays);

  const handleChange = (event) => {
    const { name, id } = event.target;
    setChoices({ ...choices, [name]: id });

    const index = Number(event.target.dataset.index);
    console.log(index);
    let newDisplayFieldsets = displayFieldsets;
    newDisplayFieldsets[index + 1] = true;
    setDisplayFieldsets(newDisplayFieldsets);
    console.log(displayFieldsets);
  };

  const fieldsets = content.map((fieldset, index) => (
    <StyledFieldSet key={fieldset.id}>
      <legend>
        <h2>{fieldset.heading}</h2>
      </legend>
      <FieldSetCards display={displayFieldsets[index]}>
        {fieldset.cards.map((card) => (
          <div key={card.id}>
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
  return <>{fieldsets}</>;
}

export default Fieldsets;
