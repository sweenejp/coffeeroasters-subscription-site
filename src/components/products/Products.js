import React from "react";

function Products({ content }) {
  const products = content.productsList.map((product) => (
    <div key={product.name}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  ));
  return (
    <section>
      <h2>{content.heading}</h2>
      {products}
    </section>
  );
}

export default Products;
