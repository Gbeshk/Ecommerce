import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import CategorySpeakersHeader from "@/app/components/categoryspeakersheader/CategorySpeakersHeader";
import Description from "@/app/components/Description/Description";
import SpeakresDetails from "@/app/components/speakersdetails/SpeakresDetails";
import React from "react";

function page() {
  return (
    <>
      <CategorySpeakersHeader />
      <SpeakresDetails />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
