import React from "react";
import { Link } from "react-router-dom";
import {
  StyledOrderProcess,
  OrderProcessCards,
  OrderProcessCard,
  StyledHR,
} from "./styles";
import Button from "../button/Button";
import { Container } from "../sharedStyledComponents";

function OrderProcess({ content, isDark }) {
  const cards = content.cards.map((card) => {
    return (
      <OrderProcessCard isDark={isDark} key={card.heading}>
        <h3>{card.heading}</h3>
        <h4>{card.listNumber}</h4>
        <p>{card.body}</p>
      </OrderProcessCard>
    );
  });
  console.log(content.button);

  return (
    <StyledOrderProcess isDark={isDark}>
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
