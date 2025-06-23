"use client";
import Image from "next/image";
import React from "react";
import Speaker1 from "../../../public/images/speaker2.jpg";
import Speaker2 from "../../../public/images/speaker1.jpg";
import { useRouter } from "next/navigation";

function SpeakresDetails() {
  const router = useRouter();

  return (
    <>
      <div className="w-full mt-[188px] ">
        <div className="w-full max-w-[1110px] h-[560px] mx-auto flex justify-between items-center">
          <Image
            src={Speaker1}
            width={540}
            height={560}
            alt="headphonepreview"
          />
          <div className="flex flex-col">
            <p className="font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-[#D87D4A]">
              NEW PRODUCT
            </p>
            <p className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase max-w-[445px] w-full mt-[24px]">
              ZX9 SPEAKER
            </p>
            <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[445px] w-full mt-[36px]">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <div
              onClick={() => router.push("/details-speaker-1")}
              className="w-[160px] h-[50px] cursor-pointer mt-[36px] bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
            >
              SEE PRODUCT
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1110px] h-[560px] mx-auto flex flex-row-reverse justify-between items-center mt-[164px]">
          <Image
            src={Speaker2}
            width={540}
            height={560}
            alt="headphonepreview"
          />
          <div className="flex flex-col">
            <p className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase max-w-[445px] w-full mt-[24px]">
              ZX7 SPEAKER
            </p>
            <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[435px] w-full mt-[36px]">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <div
              onClick={() => router.push("/details-speaker-2")}
              className="w-[160px] h-[50px] cursor-pointer mt-[36px] bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
            >
              SEE PRODUCT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakresDetails;
