"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-[400px] rounded-xl p-8 shadow-md">
        <h1 className="font-manrope font-bold text-[32px] leading-[36px] tracking-[1.14px] uppercase mb-8 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-manrope font-bold text-[12px] leading-[100%] tracking-[-0.21px] uppercase"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alexei@mail.com"
              className="w-full h-[56px] px-4 rounded-xl border border-gray-300 
              font-manrope font-bold text-[14px] leading-[100%] tracking-[-0.25px]
              placeholder:text-black placeholder:opacity-40 
              focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-manrope font-bold text-[12px] leading-[100%] tracking-[-0.21px] uppercase"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-[56px] px-4 rounded-xl border border-gray-300 
              font-manrope font-bold text-[14px] leading-[100%] tracking-[-0.25px]
              placeholder:text-black placeholder:opacity-40 
              focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-[48px] bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-manrope font-bold text-[13px] leading-[100%] tracking-[1px] uppercase rounded-xl transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginClient;
