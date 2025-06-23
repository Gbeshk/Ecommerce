import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import CategoryHeadphonesHeader from "@/app/components/categoryheadhpnoesheader/CategoryHeadphonesHeader";
import Description from "@/app/components/Description/Description";
import HeadphonesDetails from "@/app/components/HeadphonesDetails/HeadphonesDetails";
import React from "react";

function page() {
  return (
    <>
      <CategoryHeadphonesHeader />
      <HeadphonesDetails />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
