import React from "react";
import { Link } from "react-router-dom";

function OrderProcess({ content }) {
  const orderProcessCards = content.cards.map((card) => {
    return (
      <div key={card.heading}>
        <h3>{card.heading}</h3>
        <h4>{card.listNumber}</h4>
        <p>{card.body}</p>
      </div>
    );
  });

  return (
    <section>
      {content.heading && <h2>{content.heading}</h2>}
      <hr />
      <div>{orderProcessCards}</div>
      {content.button && (
        <Link to="/plan" name="Plan">
          <button>{content.button}</button>
        </Link>
      )}
    </section>
  );
}

export default OrderProcess;
