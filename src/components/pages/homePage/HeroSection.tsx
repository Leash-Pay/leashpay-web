import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" flex   flex-col  justify-center items-center  md:bg-[url('/assets/img/hero-bg.png')] bg-no-repeat md:bg-right md:bg-contain  ">
      <div className=" w-full h-full container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-16 ">
        <div className="flex flex-col gap-10    max-w-lg">
          <h1 className="font-bold text-4xl md:text-5xl text-primary leading-[3rem] md:leading-[3.5rem] ">
            Financial tools <br /> that power your <br /> business
          </h1>
          <p className="text-primary font-normal text-base">
            Regardless of the size of your business, LeashPay offers everything
            software and API needed to build a world-class payments experiences.
          </p>

          <div className="ml-2 sm:ml-0">
            <PrimaryButton text="Get Started" />
          </div>
        </div>

        <div className="w-screen md:w-full hidden md:flex    bg-no-repeat bg-cover  flex-col justify-center items-center p-5 sm:p-0 bg-center sm:bg-left  border-yellow-600">
          <div className=" w-2/3  relative sm:top-10">
            <Image
              src="/assets/img/phone-sample.png"
              alt="phone"
              height={673}
              width={415}
              blurDataURL="/assets/img/phone-sample.png"
              className="w-full sm:w-2/3 "
            />
          </div>
        </div>

        <div className="w-screen md:hidden md:w-full  bg-[url('/assets/img/hero-bg.png')]   bg-no-repeat bg-cover flex flex-col justify-center items-center p-5 sm:p-0 bg-center sm:bg-left  border-yellow-600">
          <div className=" w-2/3  relative sm:top-10">
            <Image
              src="/assets/img/phone-sample.png"
              alt="phone"
              height={673}
              width={415}
              blurDataURL="/assets/img/phone-sample.png"
              className="w-full sm:w-2/3 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
