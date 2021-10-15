import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";
import React, { useEffect } from "react";
import styled from "styled-components";

const FieldsetCards = styled.div``;

const StyledFieldSet = styled.fieldset``;

const StyledLegend = styled.legend``;

function Fieldset({
  content,
  choices,
  setChoices,
  prices,
  priceFormatter,
  grindOption,
  setGrindOption,
  accordianIndices,
  setAccordianIndicies,
}) {
  const handleChange = (event) => {
    const { name, id } = event.target;
    setChoices({ ...choices, [name]: id });
  };

  const getPricePerShipment = (card) => {
    const quantity = choices.quantity;
    const delivery = card.heading;
    if (quantity === "_____") {
      return "______";
    }
    return priceFormatter.format(prices[quantity][delivery][0]);
  };

  useEffect(() => {
    if (choices.preference === "Capsule") {
      setGrindOption({ disabled: true, required: false });
      let newaccordianIndices = accordianIndices.filter((num) => num !== 3);
      setAccordianIndicies(newaccordianIndices);
    } else {
      setGrindOption({ disabled: false, required: true });
    }
  }, [choices]);

  return (
    <AccordionItem
      disabled={content.id === "grindOption" ? grindOption.disabled : false}
    >
      <StyledFieldSet id={content.id}>
        <AccordionButton>
          <StyledLegend>{content.heading}</StyledLegend>
        </AccordionButton>
        <AccordionPanel>
          <FieldsetCards>
            {content.cards.map((card) => (
              <div key={card.id}>
                <input
                  required={
                    content.id === "grindOption" ? grindOption.required : true
                  }
                  type="radio"
                  name={content.id}
                  id={card.heading}
                  onChange={handleChange}
                />
                <label htmlFor={card.heading}>{card.heading}</label>
                <p>
                  {content.id === "delivery"
                    ? getPricePerShipment(card) + " " + card.description
                    : card.description}{" "}
                </p>
              </div>
            ))}
          </FieldsetCards>
        </AccordionPanel>
      </StyledFieldSet>
    </AccordionItem>
  );
}

export default Fieldset;
