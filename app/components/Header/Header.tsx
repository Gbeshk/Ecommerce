"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import CartIcon from "../../../public/images/cart-icon.svg";
import { useState } from "react";
import Cart from "../cart/Cart";
import { useCart } from "../CartProvider/CartProvider";
export default function Header() {
  const router = useRouter();
  const [cartShow, setCartShow] = useState(false);
  const { cartArray, setCartArray } = useCart();

  return (
    <>
      <div className="w-full bg-[#0E0E0E] h-[98px] p-1 pb-[24px]">
        <div className="w-full max-w-[1110px] mx-auto mt-[24px]  flex justify-between">
          <Image
            src={Logo}
            width={100}
            height={100}
            className="w-[143px] h-[25px] cursor-pointer"
            alt="logo"
            onClick={() => router.push("/home")}
          ></Image>
          <div className="flex gap-8">
            <p
              onClick={() => router.push("/home")}
              className="font-bold text-[13px] text-white cursor-pointer leading-[25px] tracking-[2px] uppercase hover:text-[#D87D4A] transition-colors duration-300 ease-in-out"
            >
              Home
            </p>
            <p
              onClick={() => router.push("/category-headphones")}
              className="font-bold text-[13px] leading-[25px] text-white cursor-pointer tracking-[2px] uppercase hover:text-[#D87D4A] transition-colors duration-300 ease-in-out"
            >
              HEADPHONES
            </p>
            <p
              onClick={() => router.push("/category-speakers")}
              className="font-bold text-[13px] leading-[25px] tracking-[2px] uppercase text-white cursor-pointer hover:text-[#D87D4A] transition-colors duration-300 ease-in-out"
            >
              SPEAKERS
            </p>
            <p
              onClick={() => router.push("/category-earphones")}
              className="font-bold text-[13px] leading-[25px] tracking-[2px] uppercase text-white cursor-pointer hover:text-[#D87D4A] transition-colors duration-300 ease-in-out"
            >
              EARPHONES
            </p>
          </div>
          <div className="w-[143px] p-1 flex flex-row-reverse">
            <div className="relative">
              <Image
                src={CartIcon}
                width={24}
                height={20}
                className="w-[24px] h-[20px] cursor-pointer"
                alt="cart icon"
                onClick={() => setCartShow(!cartShow)}
              />
              {cartArray.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-[12px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center">
                  {cartArray.length}
                </div>
              )}

              {cartShow && (
                <div className="absolute top-[88px] right-0 z-50">
                  <Cart cartShow={cartShow} setCartShow={setCartShow} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
