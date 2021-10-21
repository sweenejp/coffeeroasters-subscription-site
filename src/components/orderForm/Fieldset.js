import React from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@reach/accordion";
import { FaAngleDown } from "react-icons/fa";
import { FieldsetCards, FieldsetCard, StyledFieldSet, Legend } from "./styles";

function Fieldset({
  index,
  fieldset,
  userInput,
  setUserInput,
  prices,
  priceFormatter,
  grindOptionDisabled,
  setGrindOptionDisabled,
  accordianIndices,
  setAccordianIndicies,
}) {
  const handleChange = (event) => {
    const { name, id } = event.target;
    setUserInput({ ...userInput, [name]: id });

    const currentIndex = Number(event.target.dataset.fieldsetindex);
    openNextAccordianPanel(currentIndex);
  };

  const openNextAccordianPanel = (currentIndex) => {
    let newAccordianIndices = [];
    if (grindOptionDisabled && currentIndex === 2) {
      newAccordianIndices = [...accordianIndices, currentIndex + 2];
    } else {
      newAccordianIndices = [...accordianIndices, currentIndex + 1];
    }
    setAccordianIndicies([...new Set(newAccordianIndices)]);
  };

  const getPricePerShipment = (card) => {
    const quantity = userInput.quantity;
    const delivery = card.heading;
    if (!quantity) {
      return "______";
    }
    const pricePerShipment = priceFormatter.format(
      prices[quantity][delivery][0]
    );
    return pricePerShipment;
  };

  const cards = fieldset.cards.map((card) => (
    <FieldsetCard
      fieldset={fieldset.id}
      key={card.heading}
      cardName={card.heading}
      userInput={userInput}
    >
      <input
        type="radio"
        name={fieldset.id}
        id={card.heading}
        onChange={handleChange}
        data-fieldsetindex={index}
      />
      <label htmlFor={card.heading}>
        <h3>{card.heading}</h3>
        <p>
          {fieldset.id === "delivery"
            ? getPricePerShipment(card) + " " + card.description
            : card.description}{" "}
        </p>
      </label>
    </FieldsetCard>
  ));

  return (
    <AccordionItem
      disabled={fieldset.id === "grindOption" ? grindOptionDisabled : false}
    >
      <StyledFieldSet>
        <AccordionButton>
          <Legend index={index} accordianIndices={accordianIndices}>
            {fieldset.heading}
            <FaAngleDown />
          </Legend>
        </AccordionButton>
        <AccordionPanel>
          <FieldsetCards>{cards}</FieldsetCards>
        </AccordionPanel>
      </StyledFieldSet>
    </AccordionItem>
  );
}

export default Fieldset;
