import React from "react";
import { Container } from "../sharedStyledComponents";
import { StyledWhyChooseUs, WhyChooseUsCards, WhyChooseUsCard } from "./styles";

function WhyChooseUs({ content }) {
  const cards = content.cards.map((card) => {
    return (
      <WhyChooseUsCard key={card.heading}>
        <img src={card.image} alt="" />
        <div>
          <h3>{card.heading}</h3>
          <p>{card.body}</p>
        </div>
      </WhyChooseUsCard>
    );
  });

  return (
    <Container>
      <StyledWhyChooseUs>
        <h2>{content.heading}</h2>
        <p>{content.body}</p>
        <WhyChooseUsCards>{cards}</WhyChooseUsCards>
      </StyledWhyChooseUs>
    </Container>
  );
}

export default WhyChooseUs;
