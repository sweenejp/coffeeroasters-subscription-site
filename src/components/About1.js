import React from "react";
import {
  About1Styled,
  About1Card,
  About1Cards,
  About1Container,
} from "./styles";

function About1(props) {
  const content = props.content;
  const aboutCardsElements = content.aboutCards.map((card) => {
    return (
      <About1Card key={card.heading}>
        <img src={card.image} alt="" />
        <h3>{card.heading}</h3>
        <p>{card.body}</p>
      </About1Card>
    );
  });

  return (
    <About1Styled>
      <About1Container>
        <h2>{content.heading}</h2>
        <p>{content.body}</p>
      </About1Container>
      <About1Cards>{aboutCardsElements}</About1Cards>
    </About1Styled>
  );
}

export default About1;
