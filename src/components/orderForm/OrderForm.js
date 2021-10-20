import React, { useState, useEffect } from "react";
import FormProgress from "./FormProgress";
import OrderSummary from "./OrderSummary";
import OrderSummaryModal from "./OrderSummaryModal";
import Fieldset from "./Fieldset";
import { Accordion } from "@reach/accordion";
import { Container } from "../sharedStyledComponents";
import { StyledOrderForm, FormProgressContainer } from "./styles";
import Button from "../button/Button";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function OrderForm({ content }) {
  const [userInput, setUserInput] = useState({
    preference: null,
    beanType: null,
    quantity: null,
    grindOption: null,
    delivery: null,
  });
  const [displayModal, setDisplayModal] = useState(false);
  const [price, setPrice] = useState(0);
  const [grindOptionDisabled, setGrindOptionDisabled] = useState(false);
  const [accordianIndices, setAccordianIndicies] = useState([0]);
  const [formComplete, setFormComplete] = useState(false);

  const toggleItem = (toggledIndex) => {
    if (accordianIndices.includes(toggledIndex)) {
      setAccordianIndicies(
        accordianIndices.filter((currentIndex) => currentIndex !== toggledIndex)
      );
    } else {
      setAccordianIndicies([...accordianIndices, toggledIndex].sort());
    }
  };

  const getPrice = () => {
    const { quantity, delivery } = userInput;
    const [pricePerDelivery, deliveries] = content.prices[quantity][delivery];
    setPrice(priceFormatter.format(pricePerDelivery * deliveries));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayModal(true);
  };

  useEffect(() => {
    if (grindOptionDisabled) {
      if (
        userInput.preference &&
        userInput.beanType &&
        userInput.quantity &&
        userInput.delivery
      ) {
        setFormComplete(true);
      }
    } else {
      if (
        userInput.preference &&
        userInput.beanType &&
        userInput.quantity &&
        userInput.grindOption &&
        userInput.delivery
      ) {
        setFormComplete(true);
      }
    }
  }, [userInput]);

  return (
    <Container>
      <StyledOrderForm>
        <FormProgressContainer>
          <FormProgress
            content={content.fieldsets}
            userInput={userInput}
            grindOptionDisabled={grindOptionDisabled}
          />
        </FormProgressContainer>

        <form
          onSubmit={(event) => {
            handleSubmit(event);
            getPrice();
          }}
        >
          <Accordion index={accordianIndices} onChange={toggleItem}>
            {content.fieldsets.map((fieldset, index) => (
              <Fieldset
                key={fieldset.id}
                index={index}
                fieldset={fieldset}
                prices={content.prices}
                priceFormatter={priceFormatter}
                userInput={userInput}
                setUserInput={setUserInput}
                grindOptionDisabled={grindOptionDisabled}
                setGrindOptionDisabled={setGrindOptionDisabled}
                accordianIndices={accordianIndices}
                setAccordianIndicies={setAccordianIndicies}
              />
            ))}
          </Accordion>

          <OrderSummary content={content.summary} userInput={userInput} />

          <Button type="submit" disabled={!formComplete}>
            {content.buttons.first}
          </Button>

          <OrderSummaryModal
            display={displayModal}
            setDisplay={setDisplayModal}
            content={content.summary}
            userInput={userInput}
            price={price}
          />
        </form>
      </StyledOrderForm>
    </Container>
  );
}

export default OrderForm;
