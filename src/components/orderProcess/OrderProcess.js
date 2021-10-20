import React from "react";
import { Link } from "react-router-dom";
import {
  StyledOrderProcess,
  OrderProcessCards,
  OrderProcessCard,
  StyledHR,
} from "./styles";
import Button from "../button/Button";

function OrderProcess({ content, dark }) {
  const cards = content.cards.map((card) => {
    return (
      <OrderProcessCard dark={dark} key={card.heading}>
        <h3>{card.heading}</h3>
        <h4>{card.listNumber}</h4>
        <p>{card.body}</p>
      </OrderProcessCard>
    );
  });

  return (
    <StyledOrderProcess dark={dark}>
      {content.heading && <h2>{content.heading}</h2>}
      <StyledHR />
      <OrderProcessCards>{cards}</OrderProcessCards>
      {content.button && (
        <Link to="/plan" name="Plan">
          <Button>{content.button}</Button>
        </Link>
      )}
    </StyledOrderProcess>
  );
}

export default OrderProcess;
