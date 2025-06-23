import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import Description from "@/app/components/Description/Description";
import Features from "@/app/components/Features/Features";
import HeadPhnoe1Description from "@/app/components/headphone1description/HeadPhnoe1Description";
import Headphone1Pictures from "@/app/components/Headphone1Pictures/Headphone1Pictures";
import Headphone1Suggestions from "@/app/components/headphone1suggestions/Headphone1Suggestions";
import React from "react";

function page() {
  return (
    <>
      <HeadPhnoe1Description />
      <Features />
      <Headphone1Pictures />
      <Headphone1Suggestions />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
