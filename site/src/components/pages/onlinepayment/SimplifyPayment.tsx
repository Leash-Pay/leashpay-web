import { PrimaryButton } from "@/components/customUI";
import React from "react";

const SimplifyPayment = () => {
  return (
    <section className="h-[50rem] w-full ">
      <section className="h-[38rem] w-screen  md:h-[40rem] bg-[url('/assets/img/bg/payment.jpeg')] bg-cover bg-left md:bg-center bg-no-repeat relative">
        <div className="customContainer w-full flex flex-col md:flex-row justify-center items-center h-full gap-10  ">
          <div className="w-full "></div>
          <div className="w-full hidden md:flex bg-primary h-fit rounded-[30px]  flex-col justify-between px-10 gap-8 py-12 md:ml-24 ">
            <h1 className="font-bold text-4xl md:leading-[2.5rem] text-secondary">
              Simplify payments acceptance with one integration.
            </h1>
            <p className="text-white ">
              As your business expands and your payments acceptance needs grow,
              simply let us know, and we’ll make sure you have what you need to
              provide the best payment experiences. Once you’re integrated with
              LeashPay, you get online and in-person payments with one entity.
            </p>
            <div>
              <PrimaryButton text="Get Started" type={2} href="/waitlist" />
            </div>
          </div>
        </div>

        {/* mobile screen */}
        <div className="absolute w-full customContainer left-0 right-0 -bottom-[10rem]">
          <div className="w-full flex md:hidden bg-primary h-full rounded-[30px]  flex-col justify-between  px-6 gap-8 py-8 md:ml-24 ">
            <h1 className="font-bold text-4xl md:leading-[2.5rem] text-secondary">
              Simplify payments acceptance with one integration.
            </h1>
            <p className="text-white ">
              As your business expands and your payments acceptance needs grow,
              simply let us know, and we’ll make sure you have what you need to
              provide the best payment experiences. Once you’re integrated with
              LeashPay, you get online and in-person payments with one entity.
            </p>
            <div>
              <PrimaryButton text="Get Started" type={2} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SimplifyPayment;
