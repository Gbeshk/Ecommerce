"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import HeadphonePreview1 from "../../../public/images/headphones3.jpg";
import { useCart } from "../CartProvider/CartProvider";

function HeadPhnoe3Description() {
  const router = useRouter();
  const [x, setX] = useState(1);
  const { cartArray, setCartArray } = useCart();

  return (
    <>
      <div className="w-full">
        <div className="w-full max-w-[1110px] mx-auto">
          <p
            onClick={() => router.back()}
            className="text-black hover:text-[#D87D4A] transition-all duration-200 hover:opacity-100 opacity-50 w-[100px] font-normal text-[15px] leading-[25px] tracking-[0px] mt-[64px] hover:underline cursor-pointer "
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
              <p className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase max-w-[445px] w-full mt-[24px]">
                XX59 Headphones
              </p>
              <p className="text-black opacity-50 font-normal text-[15px] leading-[25px] tracking-[0px] max-w-[445px] w-full mt-[36px]">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <p className="font-bold text-[18px] leading-[100%] tracking-[1.29px] uppercase mt-[36px] text-black">
                $ 899
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

                <div
                  onClick={() => {
                    const newProduct = {
                      name: "XX59",
                      price: "$899",
                      priceInt: 899,
                      img: HeadphonePreview1,
                      quantity: x,
                    };

                    setCartArray((prev) => {
                      const existingCart = prev || [];

                      const productIndex = existingCart.findIndex(
                        (item) => item.name === newProduct.name
                      );

                      if (productIndex !== -1) {
                        const updatedCart = [...existingCart];
                        updatedCart[productIndex].quantity =
                          newProduct.quantity;
                        return updatedCart;
                      } else {
                        return [...existingCart, newProduct];
                      }
                    });
                  }}
                  className="w-[160px] h-[48px] cursor-pointer bg-[#D87D4A] hover:bg-[#FBAF85] flex items-center justify-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase text-white transition-colors duration-500 ease-in-out"
                >
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

export default HeadPhnoe3Description;
