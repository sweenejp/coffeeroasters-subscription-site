import React from "react";
import { About2Card, About2Cards, About2Styled, Button } from "./styles";

function About2(props) {
  const content = props.content;
  const aboutCardsElements = content.aboutCards.map((card) => {
    return (
      <About2Card key={card.heading}>
        <h3>{card.heading}</h3>
        <h4>{card.listNumber}</h4>
        <p>{card.body}</p>
      </About2Card>
    );
  });

  return (
    <About2Styled>
      <h2>{content.heading}</h2>
      <About2Cards>{aboutCardsElements}</About2Cards>
      <Button>{content.buttonText}</Button>
    </About2Styled>
  );
}

export default About2;
