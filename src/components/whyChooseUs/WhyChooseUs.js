import React from "react";

function WhyChooseUs({ content }) {
  const aboutCards = content.cards.map((card) => {
    return (
      <div key={card.heading}>
        <img src={card.image} alt="" />
        <div>
          <h3>{card.heading}</h3>
          <p>{card.body}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <h2>{content.heading}</h2>
      <p>{content.body}</p>
      <div>{aboutCards}</div>
    </section>
  );
}

export default WhyChooseUs;
