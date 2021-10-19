import React from "react";
import { Container } from "../sharedStyledComponents";
import { StyledBanner } from "./styles";

function Banner({ content, children }) {
  console.log(content.backgroundImages.mobile);

  return (
    <Container>
      <StyledBanner backgroundImages={content.backgroundImages}>
        <div>
          <h2>{content.heading}</h2>
          <p>{content.body}</p>
          {children}
        </div>
      </StyledBanner>
    </Container>
  );
}

export default Banner;
