import React from "react";
import { Link } from "react-router-dom";
import {
  Banner,
  Button,
  OrderProcess,
  Products,
  WhyChooseUs,
} from "../components";

function HomePage({ content }) {
  const { banner, products, whyChooseUs, orderProcess } = content;

  return (
    <>
      <Banner content={banner}>
        <Link to="./plan">
          <Button>{banner.button}</Button>
        </Link>
      </Banner>
      <Products content={products} />
      <WhyChooseUs content={whyChooseUs} />
      <OrderProcess content={orderProcess} />
    </>
  );
}

export default HomePage;
