import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" flex   flex-col  justify-center items-center    bg-no-repeat md:bg-right md:bg-contain     h-full md:h-[38rem]">
      <div className=" w-full h-full container mx-auto px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-16 ">
        <div className="flex flex-col gap-10 w-full    max-w-lg  ">
          <h1 className="font-bold text-4xl md:text-5xl text-secondary leading-[3rem] md:leading-[3.5rem] ">
            In-Person Payments
          </h1>
          <p className="text-primary font-normal text-base">
            Choose from a variety of in-person payment methods and terminals
            that allow customers to dip, tap and swipe. Payment terminals, card
            readers, POS hardware - whatever you want to call in-person payment
            devices, LeashPay has options that suit your business needs.
          </p>

          <div className="ml-2 sm:ml-0">
            <PrimaryButton text="Get Started" href="/signin" />
          </div>
        </div>

        <div className="w-full md:w-full hidden md:flex relative  h-full flex-col justify-center items-center     ">
          <div className="  w-full absolute xl:left-10     ">
            <Image
              src="/assets/img/lp-image2.png"
              alt="phone"
              height={2985}
              width={3662}
              blurDataURL="/assets/img/lp-image2.png"
              className="w-full  object-cover "
            />
          </div>
        </div>

        {/* mobile */}
        <div className="w-screen md:hidden h-[25rem] sm:h-[35rem] relative   flex flex-col justify-center items-center  ">
          <div className=" w-full absolute  -mx-4  h-full ">
            <Image
              src="/assets/img/lp-image2.png"
              alt="phone"
              height={2985}
              width={3662}
              blurDataURL="/assets/img/lp-image2.png"
              className="w-full  h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
