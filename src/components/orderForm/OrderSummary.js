import React from "react";
import styled from "styled-components";
const StyledOrderSummary = styled.div`
  border: solid green 4px;
`;

function OrderSummary({ children }) {
  return <StyledOrderSummary>{children}</StyledOrderSummary>;
}

export default OrderSummary;
