import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import Description from "@/app/components/Description/Description";
import EarPhonePictures from "@/app/components/EarPhonePictures/EarPhonePictures";
import EarphoneDescription from "@/app/components/earphonesdescription.tsx/EarphonesDescription";
import EarPhonesFeatures from "@/app/components/EarphonesFeature/EarphonesFeatures";
import Headphone1Suggestions from "@/app/components/headphone1suggestions/Headphone1Suggestions";
import React from "react";

function page() {
  return (
    <>
      <EarphoneDescription />
      <EarPhonesFeatures />
      <EarPhonePictures />
      <Headphone1Suggestions />
      <CategoriesList />
      <Description />
    </>
  );
}

export default page;
