"use client";
import Image from "next/image";
import React from "react";
import HeadphonePreview1 from "../../../public/images/headphones.jpg";
import HeadphonePreview2 from "../../../public/images/headphones2.jpg";
import HeadphonePreview3 from "../../../public/images/headphones3.jpg";
import { useRouter } from "next/navigation";

function HeadphonesDetails() {
  const router = useRouter();

  return (
    <>
      <div className="w-full mt-[188px] ">
        <div className="w-full max-w-[1110px] h-[560px] mx-auto flex justify-between items-center">
          <Image
            src={HeadphonePreview1}
            width={540}
            height={560}
            alt="headphonepreview"
          />
          <div className="flex flex-col">
            <p className="font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-[#D87D4A]">
              NEW PRODUCT
            </p>
            <p className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase max-w-[445px] w-full mt-[24px]">
              XX99 Mark II Headphones
            </p>
            <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[445px] w-full mt-[36px]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <div
              onClick={() => router.push("/details-headphone-1")}
              className="w-[160px] h-[50px] cursor-pointer mt-[36px] bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
            >
              SEE PRODUCT
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1110px] h-[560px] mx-auto flex flex-row-reverse justify-between items-center mt-[164px]">
          <Image
            src={HeadphonePreview2}
            width={540}
            height={560}
            alt="headphonepreview"
          />
          <div className="flex flex-col">
            <p className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase max-w-[445px] w-full mt-[24px]">
              XX99 Mark I Headphones
            </p>
            <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[435px] w-full mt-[36px]">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <div
              onClick={() => router.push("/details-headphone-2")}
              className="w-[160px] h-[50px] cursor-pointer mt-[36px] bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
            >
              SEE PRODUCT
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1110px] h-[560px] mx-auto flex justify-between items-center  mt-[164px]">
          <Image
            src={HeadphonePreview3}
            width={540}
            height={560}
            alt="headphonepreview"
          />
          <div className="flex flex-col">
            <p className="font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-[#D87D4A]">
              NEW PRODUCT
            </p>
            <p className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase max-w-[445px] w-full mt-[24px]">
              XX59 Headphones
            </p>
            <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[445px] w-full mt-[36px]">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <div
              onClick={() => router.push("/details-headphone-3")}
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

export default HeadphonesDetails;
