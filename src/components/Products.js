import React from "react";
import { ProductsStyled, Product } from "./styles";

function Products(props) {
  const content = props.content;
  const productsElements = props.content.productsList.map((product) => {
    return (
      <Product key={product.name}>
        <img src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </Product>
    );
  });
  return (
    <ProductsStyled>
      <h2>{content.heading}</h2>
      {productsElements}
    </ProductsStyled>
  );
}

export default Products;
