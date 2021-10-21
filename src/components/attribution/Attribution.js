import React from "react";
import { StyledAttribution } from "./styles";

function Attribution() {
  return (
    <StyledAttribution>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/sweenejp/coffeeroasters-subscription-site">
        Jimmy Sweeney
      </a>
      .
    </StyledAttribution>
  );
}

export default Attribution;
