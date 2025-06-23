"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import HeadphonePreview1 from "../../../public/images/earphones.jpg";

function EarphoneDescription() {
  const router = useRouter();
  const [x, setX] = useState(1);
  return (
    <>
      <div className="w-full">
        <div className="w-full max-w-[1110px] mx-auto">
          <p
            onClick={() => router.back()}
            className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] mt-[64px] hover:underline cursor-pointer "
          >
            Go Back
          </p>
          <div className="w-full max-w-[1110px] h-[560px] mx-auto flex justify-between items-center mt-[48px]">
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
                YX1 WIRELESS EARPHONES
              </p>
              <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[445px] w-full mt-[36px]">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <p className="font-bold text-[18px] leading-[100%] tracking-[1.29px] uppercase mt-[36px] text-black">
                $ 599
              </p>
              <div className="flex items-center gap-4 mt-[36px] ">
                <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex justify-around items-center select-none">
                  <p
                    onClick={() => {
                      if (x > 1) {
                        setX(x - 1);
                      }
                    }}
                    className="opacity-25 text-black font-bold text-[13px] leading-[100%] tracking-[1px] text-center uppercase cursor-pointer"
                  >
                    -
                  </p>
                  <p className="font-bold text-[13px] leading-[100%] tracking-[1px] text-center uppercase">
                    {x}
                  </p>
                  <p
                    onClick={() => {
                      setX(x + 1);
                    }}
                    className="opacity-25 text-black font-bold text-[13px] leading-[100%] tracking-[1px] text-center uppercase cursor-pointer"
                  >
                    +
                  </p>
                </div>

                <div className="w-[160px] h-[48px] cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out">
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EarphoneDescription;
