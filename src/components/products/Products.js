import React from "react";
import { ProductCard, ProductCards, StyledProducts } from "./styles";
import { Container } from "../sharedStyledComponents";

function Products({ content }) {
  const products = content.productsList.map((product) => (
    <ProductCard key={product.name}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </ProductCard>
  ));
  return (
    <Container>
      <StyledProducts>
        <h2>{content.heading}</h2>
        <ProductCards>{products}</ProductCards>
      </StyledProducts>
    </Container>
  );
}

export default Products;
