import React from "react";
import { StyledOrderSummary } from "./styles";
import SummaryText from "./SummaryText";

function OrderSummary({ content, userInput }) {
  return (
    <StyledOrderSummary>
      <h2>{content.heading}</h2>
      <SummaryText userInput={userInput} />
    </StyledOrderSummary>
  );
}

export default OrderSummary;
