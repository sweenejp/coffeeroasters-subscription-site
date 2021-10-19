import React from "react";
import { Container } from "../sharedStyledComponents";
import { LocationCards, LocationCard, StyledLocations } from "./styles";

function Locations({ content }) {
  const cards = content.locationCards.map((card) => {
    return (
      <LocationCard>
        <img src={card.image} alt="" />
        <h3>{card.heading}</h3>
        <p>{card.address.line1}</p>
        <p>{card.address.line2}</p>
        <p>{card.address.line3}</p>
        <p>{card.address.phoneNumber}</p>
      </LocationCard>
    );
  });

  return (
    <Container>
      <StyledLocations>
        <h2>{content.heading}</h2>
        <LocationCards>{cards}</LocationCards>
      </StyledLocations>
    </Container>
  );
}

export default Locations;
