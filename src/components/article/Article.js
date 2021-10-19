import React from "react";
import { Container } from "../sharedStyledComponents";
import { StyledArticle, StyledArticleDark } from "./styles";

function Article({ content, dark }) {
  if (dark) {
    return (
      <Container>
        <StyledArticleDark>
          <img src={content.image} alt="" />
          <div>
            <h2>{content.heading}</h2>
            <p>{content.body}</p>
          </div>
        </StyledArticleDark>
      </Container>
    );
  } else {
    return (
      <Container>
        <StyledArticle>
          <img src={content.image} alt="" />
          <div>
            <h2>{content.heading}</h2>
            <p>{content.body}</p>
          </div>
        </StyledArticle>
      </Container>
    );
  }
}

export default Article;
