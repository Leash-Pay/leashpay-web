"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/customUI";

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const onFormSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || email === "") return;

    alert("submiitng");
  };
  console.log(email);

  return (
    <div className="w-full h-full container mx-auto px-5 md:px-10  max-w-7xl flex flex-col md:flex-row   gap-16  ">
      <div className="w-full  flex flex-col gap-10     justify-center  text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-5xl text-primary leading-[3rem] md:leading-[3.5rem] max-w-md ">
          We’re excited for you to transact with us.
        </h1>
        <p className="text-primary font-regular text-base px-4 md:px-0">
          Our platform will be available soon.
          <br /> Kindly join the Waitlist to be part of the first to try it out.
          <br />
          Thank you.
        </p>
        <div>
          {/* mobile */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            <input
              type="email"
              name=""
              value={email}
              id=""
              placeholder="Enter your email address"
              className=" border border-primary rounded-[20px] h-[2.4rem] px-4 text-primary text-sm placeholder:text-primary placeholder:text-xs  flex items-center justify-center w-2/3 md:w-1/2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <PrimaryButton
              text="join waitlist"
              onClickHandler={() => onFormSubmitHandler}
            />
          </div>
          {/* desktop */}
          <form
            className=" hidden md:block  relative  h-[2.5rem] w-full max-w-md"
            onSubmit={onFormSubmitHandler}
          >
            <input
              type="email"
              name=""
              value={email}
              id=""
              placeholder="Enter your email address"
              className="absolute border border-primary rounded-[22px] h-full  px-4 text-primary text-sm placeholder:text-primary placeholder:text-xs  flex items-center justify-center w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="absolute  right-0 top-0 h-full flex items-center">
              <button
                className="px-10  border-primary h-full rounded-[22px] bg-primary text-white hover:bg-secondary transition-all  transform hover:scale-x-105  uppercase  font-extralight text-xs"
                onClick={() => onFormSubmitHandler}
                type={"submit"}
              >
                Join waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full relative h-[20rem] md:h-[30rem] ">
        <Image
          src="/assets/img/easy-wireless-yechnology-payment.jpg"
          alt={"lady waiting to be listed"}
          //   width={6000}
          //   height={4000}
          className="rounded-[50px] object-cover h-full absolute "
          fill
        />
      </div>
    </div>
  );
};

export default Waitlist;
