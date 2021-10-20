import React, { useRef } from "react";
import Button from "../button/Button";
import SummaryText from "./SummaryText";
import { Background, StyledOrderSummaryModal } from "./styles";

function OrderSummaryModal({ content, price, userInput, display, setDisplay }) {
  const backgroundRef = useRef();

  const closeModal = (event) => {
    if (backgroundRef.current === event.target) {
      setDisplay(false);
    }
  };

  return (
    <>
      {display ? (
        <Background onClick={closeModal} ref={backgroundRef} display={display}>
          <StyledOrderSummaryModal display={display}>
            <h2>{content.heading}</h2>
            <SummaryText userInput={userInput} />
            <p className="confirm">{content.confirm}</p>
            <Button type="button">Checkout - {price} / mo</Button>
          </StyledOrderSummaryModal>
        </Background>
      ) : null}
    </>
  );
}

export default OrderSummaryModal;
