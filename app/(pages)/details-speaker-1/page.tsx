import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import Description from "@/app/components/Description/Description";
import Speaker1Description from "@/app/components/speaker1description/Speaker1Description";
import Speaker1Features from "@/app/components/speaker1Features/Speaker1Features";
import Speaker1Pictures from "@/app/components/Speaker1Pictures/Speaker1Pictures";
import Speaker1Suggestions from "@/app/components/speaker1suggestions/Speaker1Suggestions";
import React from "react";

function page() {
  return (
    <>
      <Speaker1Description />
      <Speaker1Features />
      <Speaker1Pictures />
      <Speaker1Suggestions />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
