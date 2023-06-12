"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

interface InputComponentProps {
  label: string;
  type: "text" | "email" | "password";
}

const InputComponent = ({ label, type }: InputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label className="text-primary ml-3 ">{label}</label>
      {type === "password" ? (
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            name=""
            id=""
            className="w-full border border-primary rounded-[20px] h-[2.4rem] px-4 text-black"
          />
          <button
            type="button"
            className="absolute top-2 right-3 text-primaryBlack p-1 z-10   "
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {!showPassword ? (
              <FiEye color="#008999" />
            ) : (
              <FiEyeOff color="#008999" />
            )}
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <input
            type={type}
            name=""
            id=""
            className="w-full border border-primary rounded-[20px] h-[2.4rem] px-4 text-black"
          />
        </div>
      )}
    </div>
  );
};

const page = () => {
  return (
    <div className=" w-screen customContainer">
      <section className="border mt-8 ml-5">
        <Link href="/">
          <Image
            src="/assets/icons/leashpay_logo.svg"
            width={259.526}
            height={51.704}
            alt="leashpay logo"
            className="w-[60%] "
          />
        </Link>
      </section>

      <section className="bg-white h-full w-full px-5 py-10 mt-20 rounded-[25px] shadow-sm flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-primary leading-[2.6rem]">
          Sign in to your LeashPay account
        </h1>
        <div className="flex flex-col gap-3">
          <InputComponent label="Email" type="email" />
          <InputComponent label="Password" type={"password"} />
          <div className="border"></div>
        </div>
      </section>
    </div>
  );
};

export default page;
