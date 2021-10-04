import React from "react";
import { Link } from "react-router-dom";
import { BannerStyled, Button } from "./styles";

function Banner(props) {
  const content = props.content;

  return (
    <div>
      <BannerStyled backgroundImages={content.backgroundImages}>
        <h2>{content.heading}</h2>
        <p>{content.body}</p>
        {content.button && (
          <Link to="/plan" name="Plan">
            <Button>{content.button}</Button>
          </Link>
        )}
      </BannerStyled>
    </div>
  );
}

export default Banner;
