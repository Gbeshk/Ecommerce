import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import Description from "@/app/components/Description/Description";
import HeadPhnoe2Description from "@/app/components/HeadPhone2Description/HeadPhone2Description";
import Headphone2Pictures from "@/app/components/HeadPhone2Pictures/Headphone2Pictures";
import Headphone2Suggestions from "@/app/components/Headphone2Suggestions/HeadPhone2Suggestions";
import HeadPhones2Features from "@/app/components/Headphones2Features/HeadPhones2Features";
import React from "react";

function page() {
  return (
    <>
      <HeadPhnoe2Description />
      <HeadPhones2Features />
      <Headphone2Pictures />
      <Headphone2Suggestions />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
