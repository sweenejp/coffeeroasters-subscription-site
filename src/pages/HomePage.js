import React from "react";
import { Banner, OrderProcess, Products, WhyChooseUs } from "../components";

function HomePage({ content }) {
  const { banner, products, whyChooseUs, orderProcess } = content;

  return (
    <>
      <Banner content={banner} />
      <Products content={products} />
      <WhyChooseUs content={whyChooseUs} />
      <OrderProcess content={orderProcess} />
    </>
  );
}

export default HomePage;
