import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import Description from "@/app/components/Description/Description";
import Headphone2Suggestions from "@/app/components/Headphone2Suggestions/HeadPhone2Suggestions";
import HeadPhnoe3Description from "@/app/components/headphone3description/HeadPhnoe3Description";
import Headphone3Pictures from "@/app/components/headphone3pictures/HeadPhone3Pictures";
import Headphone3Suggestions from "@/app/components/headphone3suggestions/HeadPhone3Suggestions";
import Headphone3Features from "@/app/components/headphones3Features/Headphones3Features";
import React from "react";

function page() {
  return (
    <>
      <HeadPhnoe3Description />
      <Headphone3Features />
      <Headphone3Pictures />
      <Headphone3Suggestions />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
