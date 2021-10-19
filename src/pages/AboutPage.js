import React from "react";
import { Article, Banner, Locations } from "../components";

function AboutPage({ content }) {
  const { banner, ourCommitment, uncompromisingQuality, locations } = content;

  return (
    <>
      <Banner content={banner} />
      <Article content={ourCommitment} />
      <Article dark content={uncompromisingQuality} />
      <Locations content={locations} />
    </>
  );
}

export default AboutPage;
