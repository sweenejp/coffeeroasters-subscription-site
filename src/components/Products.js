import React from "react";
import { ProductsStyled } from "./styles";

function Products(props) {
  const content = props.content;
  const productsElements = props.content.productsList.map((product) => {
    return (
      <div key={product.name}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    );
  });
  return (
    <ProductsStyled>
      <h2 id="products-heading">{content.heading}</h2>
      <div>{productsElements}</div>
    </ProductsStyled>
  );
}

export default Products;
