import React from "react";

function SummaryText({ userInput }) {
  let { preference, beanType, quantity, grindOption, delivery } = userInput;

  if (preference === "Capsule") {
    return (
      <p>
        &quot;I drink my coffee using <span>{preference || "_____"}</span> with
        a <span>{beanType || "_____"}</span> type of bean.{" "}
        <span>{quantity || "_____"}</span>, sent to me{" "}
        <span>{delivery || "_____"}</span>
        &quot;
      </p>
    );
  } else {
    return (
      <p>
        &quot;I drink my coffee using <span>{preference || "_____"}</span> with
        a <span>{beanType || "_____"}</span> type of bean.{" "}
        <span>{quantity || "_____"}</span> ground ala{" "}
        <span>{grindOption || "_____"}</span>, sent to me{" "}
        <span>{delivery || "_____"}</span>
        .&quot;
      </p>
    );
  }
}

export default SummaryText;
