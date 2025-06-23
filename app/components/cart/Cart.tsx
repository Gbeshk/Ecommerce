"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useCart } from "../CartProvider/CartProvider";
import { useRouter } from "next/navigation";
interface ICart {
  cartShow: boolean;
  setCartShow: Dispatch<SetStateAction<boolean>>;
}
function Cart({ cartShow, setCartShow }: ICart) {
  const { cartArray, setCartArray } = useCart();
  const router = useRouter();
  const totalPrice = cartArray.reduce(
    (acc, item) => acc + item.priceInt * item.quantity,
    0
  );

  return (
    <div className="w-[377px] bg-white flex flex-col p-[36px] rounded-md shadow-lg">
      {cartArray.length > 0 && (
        <div className="flex items-center justify-between mb-6">
          <p className="font-manrope font-bold text-[18px] leading-[100%] tracking-[1.29px] uppercase">
            cart ({cartArray.length})
          </p>
          <p
            className="text-black opacity-50 hover:text-[#D87D4A] transition-all duration-200 hover:opacity-100 font-manrope font-normal text-[15px] leading-[25px] tracking-[0px] underline decoration-solid cursor-pointer "
            onClick={() => setCartArray([])}
          >
            Remove all
          </p>
        </div>
      )}

      {cartArray.length === 0 && (
        <div className="flex flex-1 items-center justify-center h-[150px]">
          <p className="font-manrope font-normal text-[15px] text-center text-black opacity-50">
            Your cart is empty.
          </p>
        </div>
      )}

      {cartArray.length > 0 &&
        cartArray.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4 mt-6">
              <Image
                src={item.img}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div>
                <p className="font-manrope font-bold text-[15px] leading-[25px] tracking-[0px]">
                  {item.name}
                </p>
                <p className="font-manrope font-bold text-[14px] leading-[25px] tracking-[0px] opacity-50 text-black">
                  {item.price}
                </p>
              </div>
            </div>

            <div className="w-[120px] h-[48px] bg-[#F1F1F1] mt-6 flex justify-around items-center select-none">
              <p
                onClick={() => {
                  if (item.quantity > 1) {
                    const newCart = [...cartArray];
                    newCart[index] = {
                      ...item,
                      quantity: item.quantity - 1,
                    };
                    setCartArray(newCart);
                  }
                }}
                className="opacity-25 text-black font-bold text-[13px] leading-[100%] tracking-[1px] text-center uppercase cursor-pointer"
              >
                -
              </p>
              <p className="font-bold text-[13px] leading-[100%] tracking-[1px] text-center uppercase">
                {item.quantity}
              </p>
              <p
                onClick={() => {
                  const newCart = [...cartArray];
                  newCart[index] = {
                    ...item,
                    quantity: item.quantity + 1,
                  };
                  setCartArray(newCart);
                }}
                className="opacity-25 text-black font-bold text-[13px] leading-[100%] tracking-[1px] text-center uppercase cursor-pointer"
              >
                +
              </p>
            </div>
          </div>
        ))}

      {cartArray.length > 0 && (
        <>
          <div className="flex items-center justify-between mt-6">
            <p className="text-black opacity-50 font-manrope font-normal text-[15px] leading-[25px] tracking-[0px]">
              TOTAL
            </p>
            <p className="font-bold text-[15px] leading-[25px] tracking-[0px]">
              ${totalPrice.toLocaleString()}
            </p>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              setCartShow(false);
              router.push("/checkout");
            }}
            className="transition-all duration-300 hover:bg-[#FBAF85] cursor-pointer mt-6 w-[313px] h-[48px] bg-[#D87D4A] flex items-center justify-center font-manrope font-bold text-[13px] leading-[100%] tracking-[1px] text-center uppercase text-white select-none"
          >
            checkout
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
