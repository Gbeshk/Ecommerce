"use client";
import React from "react";
import HeadPhones2 from "../../../public/images/speaker1.jpg";
import HeadPhones3 from "../../../public/images/headphones2.jpg";
import Speakers2 from "../../../public/images/headphones3.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Speaker1Suggestions() {
  const router = useRouter();
  return (
    <>
      <div className="max-w-[1110px] w-full mx-auto flex flex-col items-center mt-[112px]">
        <p className="font-bold text-[32px] leading-[36px] tracking-[1.14px] uppercase">
          you may also like
        </p>
        <div className="flex justify-between max-w-[1110px] items-center mt-[64px] w-full">
          <div className="flex flex-col items-center">
            <Image
              src={HeadPhones2}
              width={350}
              height={318}
              className="w-[350px] h-[318px] object-contain"
              alt="headphones2"
            ></Image>
            <p className="font-bold text-[24px] leading-[100%] tracking-[1.71px] text-center uppercase mt-[32px]">
              XX99 MARK I
            </p>
            <div
              onClick={() => router.push("/details-speaker-2")}
              className="w-[160px] h-[48px] mt-[32px] cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
            >
              See Product
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={HeadPhones3}
              width={350}
              height={318}
              className="w-[350px] h-[318px] object-contain"
              alt="headphones2"
            ></Image>
            <p className="font-bold text-[24px] leading-[100%] tracking-[1.71px] text-center uppercase mt-[32px]">
              XX59
            </p>
            <div
              onClick={() => router.push("/details-headphone-2")}
              className="w-[160px] h-[48px] mt-[32px] cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
            >
              See Product
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={Speakers2}
              width={350}
              height={318}
              className="w-[350px] h-[318px] object-contain"
              alt="headphones2"
            ></Image>
            <p className="font-bold text-[24px] leading-[100%] tracking-[1.71px] text-center uppercase mt-[32px]">
              ZX9 SPEAKER
            </p>
            <div
              onClick={() => router.push("/details-headphone-3")}
              className="w-[160px] h-[48px] mt-[32px] cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
            >
              See Product
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Speaker1Suggestions;
