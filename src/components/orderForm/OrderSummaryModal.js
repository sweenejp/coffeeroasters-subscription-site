import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: .3;
  }
  to {
    opacity: 1;
  }
`;

const StyledOrderSummaryModal = styled.div`
  visibility: ${({ display }) => (display ? "visible" : "hidden")};
  animation: ${({ display }) => (display ? fadeIn : null)} 1s linear;
  border: solid green 4px;
  width: 540px;
  height: 600px;
  max-width: 90%;
  margin: 0 auto 0 auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;

function OrderSummaryModal({ children, display, setDisplay }) {
  const backgroundRef = useRef();

  const closeModal = (e) => {
    if (backgroundRef.current === e.target) {
      setDisplay(false);
    }
  };

  return (
    <>
      {display ? (
        <Background onClick={closeModal} ref={backgroundRef} display={display}>
          <StyledOrderSummaryModal display={display}>
            {children}
          </StyledOrderSummaryModal>
        </Background>
      ) : null}
    </>
  );
}

export default OrderSummaryModal;
