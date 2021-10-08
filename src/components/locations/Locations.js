import React from "react";

function Locations({ content }) {
  const locationCards = content.locationCards.map((card) => {
    return (
      <div>
        <img src={card.image} alt="" />
        <h3>{card.heading}</h3>
        <p>{card.address.line1}</p>
        <p>{card.address.line2}</p>
        <p>{card.address.line3}</p>
        <p>{card.address.phoneNumber}</p>
      </div>
    );
  });

  return (
    <section>
      <h2>{content.heading}</h2>
      <div>{locationCards}</div>
    </section>
  );
}

export default Locations;
