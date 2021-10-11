import React, { useState } from "react";
import FormProgress from "./FormProgress";
import OrderSummary from "./OrderSummary";
import OrderSummaryModal from "./OrderSummaryModal";
import Fieldsets from "./Fieldsets";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function OrderForm({ content }) {
  const [choices, setChoices] = useState({
    preference: "_____",
    beanType: "_____",
    grindOption: "_____",
    quantity: "_____",
    delivery: "_____",
  });
  const [displayModal, setDisplayModal] = useState(false);
  const [price, setPrice] = useState(0);

  const getPrice = () => {
    const { quantity, delivery } = choices;
    const price =
      content.prices[quantity][delivery][0] *
      content.prices[quantity][delivery][1];
    const formatedPrice = formatter.format(price);
    setPrice(formatedPrice);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayModal(true);
  };

  // if capsule,
  //   disable grind-option
  //   "I drink my coffee **using** Capsules"
  //   Remove the grind selection text
  //  if "Filter" or "Espresso"
  //   "I drink my coffee **as** Filter||Espresso"
  //   Keep/Add the grind selection text

  // for each fieldset
  // if first fieldset, fieldset > div gets display = true
  // else fieldset > div gets display=false
  // fieldset > input onChange => next fieldset's div gets display = true

  const summaryText = (
    <p>
      I drink my coffee as <span>{choices.preference}</span> with a{" "}
      <span>{choices.beanType}</span> type of bean.{" "}
      <span>{choices.quantity}</span> ground ala{" "}
      <span>{choices.grindOption}</span>, sent to me
      <span>{choices.delivery}</span>
    </p>
  );

  return (
    <>
      <FormProgress content={content.fieldsets} />
      <form
        onSubmit={(event) => {
          handleSubmit(event);
          getPrice();
        }}
      >
        <Fieldsets
          content={content.fieldsets}
          setChoices={setChoices}
          choices={choices}
        />
        <OrderSummary display={true}>
          <h3>{content.summary.heading}</h3>
          {summaryText}
          <p>{content.summary.confirm}</p>
        </OrderSummary>
        <button type="submit">{content.buttons.first}</button>
        <OrderSummaryModal display={displayModal} setDisplay={setDisplayModal}>
          <h3>{content.summary.heading}</h3>
          {summaryText}
          <p>{content.summary.confirm}</p>
          <button type="button">Checkout - {price} / mo</button>
        </OrderSummaryModal>
      </form>
    </>
  );
}

export default OrderForm;
