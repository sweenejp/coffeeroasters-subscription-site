import React from "react";
import { Banner, OrderForm, OrderProcess } from "../components";

function OrderPage({ content }) {
  const { banner, orderProcess, orderForm } = content;

  return (
    <>
      <Banner content={banner} />
      <OrderProcess isDark content={orderProcess} />
      <OrderForm content={orderForm} />
    </>
  );
}

export default OrderPage;
