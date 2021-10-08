import React from "react";
import { Link } from "react-router-dom";

function Banner({ content }) {
  return (
    <section>
      <h2>{content.heading}</h2>
      <p>{content.body}</p>
      {content.button && (
        <Link to="/plan" name="Plan">
          <button>{content.button}</button>
        </Link>
      )}
    </section>
  );
}

export default Banner;
