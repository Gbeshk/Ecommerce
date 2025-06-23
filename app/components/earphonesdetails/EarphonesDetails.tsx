"use client";
import Image from "next/image";
import React from "react";
import EarPhones from "../../../public/images/image-category-page-preview.jpg";
import { useRouter } from "next/navigation";
function EarphonesDetails() {
  const router = useRouter();
  return (
    <div className="w-full mt-[188px] ">
      <div className="w-full max-w-[1110px] h-[560px] mx-auto flex justify-between items-center  mt-[164px]">
        <Image
          src={EarPhones}
          width={540}
          height={560}
          alt="headphonepreview"
        />
        <div className="flex flex-col">
          <p className="font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-[#D87D4A]">
            NEW PRODUCT
          </p>
          <p className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase max-w-[445px] w-full mt-[24px]">
            YX1 WIRELESS EARPHONES
          </p>
          <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[445px] w-full mt-[36px]">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <div
            onClick={() => router.push("/details-earphones")}
            className="w-[160px] h-[50px] cursor-pointer mt-[36px] bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
          >
            SEE PRODUCT
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarphonesDetails;
