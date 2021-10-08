import React from "react";
import FormProgress from "./FormProgress";
import OrderSummary from "./OrderSummary";

function OrderForm({ content }) {
  const form = content.fieldsets.map((fieldset) => (
    <fieldset key={fieldset.altHeading}>
      <legend>
        <h2>{fieldset.heading}</h2>
      </legend>
      {fieldset.cards.map((card) => (
        <div key={card.id}>
          <input type="radio" name={fieldset.heading} id={card.id} />
          <label htmlFor={card.id}>{card.heading}</label>
          <p>{card.description}</p>
        </div>
      ))}
    </fieldset>
  ));
  return (
    <>
      <FormProgress content={content.fieldsets} />
      <form>
        {form}
        <OrderSummary content={content.summary} />
        <button>{content.buttons.first}</button>
        <OrderSummary content={content.summary}>
          <button>{content.buttons.second}</button>
        </OrderSummary>
      </form>
    </>
  );
}

export default OrderForm;
