import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import Description from "@/app/components/Description/Description";
import Speaker2Description from "@/app/components/Speaker2Desctiption/Speaker2Description";
import Speaker2Features from "@/app/components/Speaker2Features/Speaker2Features";
import Speaker2Pictures from "@/app/components/Speaker2Pictures/Speaker2Pictures";
import Speaker2Suggestions from "@/app/components/Speaker2Suggestions/Speaker2Suggestions";
import React from "react";

function page() {
  return (
    <>
      <Speaker2Description />
      <Speaker2Features />
      <Speaker2Pictures />
      <Speaker2Suggestions />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
