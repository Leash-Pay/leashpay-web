import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

const RightForYouSection = () => {
  return (
    <section className="h-full">
      <div className="customContainer flex flex-col gap-10">
        <div className="">
          <h1 className="text-secondary headerText1 text-center">
            We have what is right for you
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10 py-8  items-start ">
          <div className="flex flex-col gap-6 w-full  md:mt-16 h-full">
            <h1 className="text-primary font-bold text-4xl">
              Hosted Checkout page
            </h1>
            <p className="text-base text-primary">
              LeashPay Checkout is a prebuilt, hosted payment page. Whether you
              offer one-time purchases or subscriptions, use Checkout to easily
              and securely accept payments online.
            </p>
            <div className="hidden md:block">
              <p className="text-[#E86000] text-base mt-2">
                You can also edit the Checkout’s colors, fonts, shapes, to match
                your brand and website.
              </p>
            </div>
            <div className="hidden md:block">
              <PrimaryButton text="Get Started" />
            </div>
          </div>
          <div className="w-full  h-full ">
            <Image
              src="/assets/img/payment/checkout1.png"
              alt="checkout1"
              height={2376}
              width={3324}
              className=""
            />
          </div>
          <div className="md:hidden">
            <p className="text-secondary text-base mt-2">
              You can also edit the Checkout’s colors, fonts, shapes, to match
              your brand and website.
            </p>
          </div>
          <div className="md:hidden ">
            <PrimaryButton text="Get Started" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 py-8  items-start ">
          <div className="flex flex-col gap-6 w-full  md:mt-16 h-full">
            <h1 className="text-primary font-bold text-4xl">
              Customise your flow
            </h1>
            <p className="text-base text-primary">
              Design your own payments form on your site using our prebuilt UI
              components. Contact us to build a fully API-based integration with
              your own UI.
            </p>

            <div className="hidden md:block">
              <PrimaryButton text="Get Started" />
            </div>
          </div>
          <div className="w-full  h-full ">
            <Image
              src="/assets/img/payment/checkout2.png"
              alt="checkout1"
              height={1944}
              width={3304}
              className=""
            />
          </div>

          <div className="md:hidden ">
            <PrimaryButton text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightForYouSection;
