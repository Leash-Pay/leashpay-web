"use client";

import { SecondaryButton } from "@/components/customUI";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { text } from "stream/consumers";

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
    <div
      className={`w-screen  h-[90vh] md:h-screen bg-[url('/assets/img/bg/lp-blue.svg')]  md:bg-[bottom_right_1rem] md:bg-[length:1050px_700px] bg-no-repeat bg-bottom  `}
    >
      <div className="customContainer flex flex-col md:justify-between h-full">
        <section className=" mt-8 ml-5 ">
          <Link href="/">
            <Image
              src="/assets/icons/leashpay_logo.svg"
              width={259.526}
              height={51.704}
              alt="leashpay logo"
              className="w-[60%] md:w-2/12"
            />
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-5 w-full ">
          <section className="w-full w-col"></section>
          <section className="w-full w-col"></section>

          <section className="bg-white  w-full px-5 py-10 mt-10 rounded-[25px] shadow-sm flex flex-col gap-6 col-span-2">
            <h1 className="text-3xl font-bold text-primary leading-[2.6rem]">
              Create your LeashPay account
            </h1>
            <div className="flex flex-col gap-3">
              <InputComponent label="Email" type="email" />
              <InputComponent label="Full name" type={"text"} />
              <InputComponent label="Country" type={"text"} />
              <InputComponent label="Password" type={"password"} />
              <div className=" flex  justify-between items-start gap-3 ">
                <div className=" h-full">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="border border-primary h-6 w-6 rounded-[5im0px]"
                  />
                </div>
                <p className="text-primary text-sm">
                  Get emails from LeashPay about product updates, industry news,
                  and events. If you change your mind, you can unsubscribe at
                  any time. <br />{" "}
                  <span className="text-secondary">Privacy Policy</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <SecondaryButton text="Create Account" />
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-primary">
                Have an account?{" "}
                <Link href="/signin" className="text-secondary">
                  Sign in
                </Link>
              </p>
            </div>
          </section>
          <section className="w-full w-col"></section>
        </section>

        <section className="mt-16  mb-8">
          <p className="text-primary">© LeashPay · Privacy & terms</p>
        </section>
      </div>
    </div>
  );
};

export default page;
