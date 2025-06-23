import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import CategoryEarphonesHeader from "@/app/components/categoryEarphonesHeader/CategoryEarphonesHeader";
import Description from "@/app/components/Description/Description";
import EarphonesDetails from "@/app/components/earphonesdetails/EarphonesDetails";
import React from "react";

function page() {
  return (
    <>
      <CategoryEarphonesHeader />
      <EarphonesDetails />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
