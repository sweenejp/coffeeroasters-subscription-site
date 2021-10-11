import React, { useState, useEffect } from "react";
import FormProgress from "./FormProgress";
import OrderSummary from "./OrderSummary";
import OrderSummaryModal from "./OrderSummaryModal";

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

  const handleChange = (event) => {
    const { name, id } = event.target;
    setChoices({ ...choices, [name]: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayModal(true);
  };

  const form = content.fieldsets.map((fieldset) => (
    <fieldset key={fieldset.id}>
      <legend>
        <h2>{fieldset.heading}</h2>
      </legend>
      {fieldset.cards.map((card) => (
        <div key={card.id}>
          <input
            required
            type="radio"
            name={fieldset.id}
            id={card.heading}
            onChange={handleChange}
          />
          <label htmlFor={card.heading}>{card.heading}</label>
          <p>{card.description}</p>
        </div>
      ))}
    </fieldset>
  ));

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
        {form}
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
