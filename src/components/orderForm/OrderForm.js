import React, { useState, useEffect } from "react";
import FormProgress from "./FormProgress";
import OrderSummary from "./OrderSummary";
import OrderSummaryModal from "./OrderSummaryModal";
import SummaryText from "./SummaryText";
import Fieldset from "./Fieldset";
import { Accordion } from "@reach/accordion";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function OrderForm({ content }) {
  const [choices, setChoices] = useState({
    preference: "_____",
    beanType: "_____",
    quantity: "_____",
    grindOption: "_____",
    delivery: "_____",
  });
  const [displayModal, setDisplayModal] = useState(false);
  const [price, setPrice] = useState(0);
  const [grindOption, setGrindOption] = useState({
    disabled: false,
    required: true,
  });
  const [accordianIndices, setAccordianIndicies] = useState([0]);

  const toggleItem = (toggledIndex) => {
    if (accordianIndices.includes(toggledIndex)) {
      setAccordianIndicies(
        accordianIndices.filter((currentIndex) => currentIndex !== toggledIndex)
      );
    } else {
      setAccordianIndicies([...accordianIndices, toggledIndex].sort());
    }
  };

  const getPrice = () => {
    const { quantity, delivery } = choices;
    const price =
      content.prices[quantity][delivery][0] *
      content.prices[quantity][delivery][1];
    setPrice(priceFormatter.format(price));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayModal(true);
  };

  return (
    <>
      <FormProgress content={content.fieldsets} choices={choices} />

      <form
        onSubmit={(event) => {
          handleSubmit(event);
          getPrice();
        }}
      >
        <Accordion index={accordianIndices} onChange={toggleItem}>
          {content.fieldsets.map((fieldset) => (
            <Fieldset
              key={fieldset.id}
              content={fieldset}
              prices={content.prices}
              priceFormatter={priceFormatter}
              choices={choices}
              grindOption={grindOption}
              setGrindOption={setGrindOption}
              setChoices={setChoices}
              accordianIndices={accordianIndices}
              setAccordianIndicies={setAccordianIndicies}
            />
          ))}
        </Accordion>

        <OrderSummary display={true}>
          <h3>{content.summary.heading}</h3>
          <SummaryText choices={choices} />
          <p>{content.summary.confirm}</p>
        </OrderSummary>

        <button type="submit">{content.buttons.first}</button>

        <OrderSummaryModal display={displayModal} setDisplay={setDisplayModal}>
          <h3>{content.summary.heading}</h3>
          <SummaryText choices={choices} />
          <p>{content.summary.confirm}</p>
          <button type="button">Checkout - {price} / mo</button>
        </OrderSummaryModal>
      </form>
    </>
  );
}

export default OrderForm;
