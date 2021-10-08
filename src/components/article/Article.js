import React from "react";

function Article({ content }) {
  return (
    <article>
      <img src={content.image} alt="" />
      <h3>{content.heading}</h3>
      <p>{content.body}</p>
    </article>
  );
}

export default Article;
