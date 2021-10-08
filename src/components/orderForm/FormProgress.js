import React from "react";

function FormProgress({ content }) {
  const altHeadings = content.map((item) => <h4>{item.altHeading}</h4>);
  return <>{altHeadings}</>;
}

export default FormProgress;
