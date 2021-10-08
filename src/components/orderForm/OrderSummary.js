import React from "react";

function OrderSummary({ content, children }) {
  return (
    <div>
      <h3>{content.heading}</h3>
      <p>{content.body}</p>
      <p>{content.confirm}</p>
      {children}
    </div>
  );
}

export default OrderSummary;
