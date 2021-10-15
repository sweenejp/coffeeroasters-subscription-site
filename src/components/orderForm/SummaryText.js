import React from "react";

function SummaryText({ choices }) {
  const { preference, beanType, quantity, grindOption, delivery } = choices;

  if (preference === "Capsule") {
    return (
      <p>
        I drink my coffee using <span>{preference}</span> with a{" "}
        <span>{beanType}</span> type of bean. <span>{quantity}</span>, sent to
        me <span>{delivery}</span>
      </p>
    );
  } else {
    return (
      <p>
        I drink my coffee using <span>{preference}</span> with a{" "}
        <span>{beanType}</span> type of bean. <span>{quantity}</span> ground ala{" "}
        <span>{grindOption}</span>, sent to me <span>{delivery}</span>
      </p>
    );
  }
}

export default SummaryText;
