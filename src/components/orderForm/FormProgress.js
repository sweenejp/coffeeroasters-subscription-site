import React from "react";
import { FormProgressItem, StyledFormProgress } from "./styles";

function FormProgress({ content, userInput, grindOptionDisabled }) {
  let updatedContent = content;
  if (grindOptionDisabled) {
    updatedContent = updatedContent.filter(
      (fieldset) => fieldset.id !== "grindOption"
    );
  }
  return (
    <StyledFormProgress>
      {updatedContent.map((fieldset, index) => (
        <FormProgressItem
          key={fieldset.id}
          greyOut={userInput[fieldset.id] ? false : true}
        >
          <span>{`0${index + 1}`}</span> {fieldset.altHeading}
          {": "}
          <span>{userInput[fieldset.id] || "_____"}</span>
        </FormProgressItem>
      ))}
    </StyledFormProgress>
  );
}

export default FormProgress;
