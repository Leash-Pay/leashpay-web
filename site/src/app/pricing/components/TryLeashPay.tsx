import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/customUI";

const TryLeashPay = () => {
  return (
    <div className="container mx-auto max-w-7xl  flex flex-col lg:flex-row  px-5 h-[567px] sm:h-[420px]">
      <div className="w-full h-full  rounded-b-[30px]  lg:rounded-l-[30px] lg:rounded-br-none bg-white p-6 lg:p-10 lg:px-12 lg:pl-20 flex flex-col gap-10 ">
        <div className="">
          <h1 className="text-secondary text-3xl md:text-4xl mb-4">
            Try LeashPay Now
          </h1>
          <h2 className="text-primary font-bold text-3xl md:text-5xl md:leading-[4.0rem]">
            Start accepting payments in just 30 minutes
          </h2>
        </div>
        <div>
          <PrimaryButton text="Create your free account" />
        </div>
      </div>
      <div className="w-full h-full   order-first lg:order-last">
        <div className=" h-full w-full relative">
          <Image
            alt=""
            src="/assets/img/pricing.png"
            blurDataURL="/assets/img/pricing.png"
            unoptimized
            // width={1424}
            //   height={479}
            fill
            className="absolute h-full w-full  rounded-t-[30px] lg:rounded-tl-none lg:rounded-br-[30px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TryLeashPay;
